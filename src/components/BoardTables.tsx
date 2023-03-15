import React, {useState, useEffect} from 'react'
import { logBoardData } from '../data'
import { buyBoardData } from '../data'
import { sellBoardData } from '../data'
import { decrypt } from '../utils'
import {Table} from './BoardTable'

const sampleTradeData = require('../sampleLogTableRes.json').messages


const BoardTables = () => {

  const socketUrl = "wss://comx-sand-api.afex.dev/stream/trades"
  const [ logDataRows, setLogDataRows ] = useState([])

  const getData = (endpoint: string | URL) => {
    
    const socket = new WebSocket(endpoint)

    socket.addEventListener("open", (e) => {
      console.log("WebSocket connection opened");
    });

    socket.addEventListener("message", (e) => {
      const response = JSON.parse(e.data);
      // @ts-ignore
      const tradeData = response?.data?.messages

      const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
     // @ts-ignore
      const tradeDataRows = tradeData.reduce( ( acc, next ) => {
        const { security_code, commodity_code, units, matched_qty, board_type, order_type, order_price, updated, created } = next
        const decryptedArr = [ security_code, board_type, order_type, order_price, units, updated ]
            .map(item => decrypt(item))
        const dateAndTIme = decryptedArr.pop() as string
        const dateObject = new Date(dateAndTIme)
        const date = dateObject.getDay() + " " + monthNames[dateObject.getMonth()]  + "," + dateObject.getFullYear()
        const time = dateAndTIme.slice(11, 16)
        decryptedArr.push(date, time)
        acc.push(decryptedArr)
        return acc
      }, [])
      setLogDataRows(tradeDataRows)

      
    socket.addEventListener("error", (e) => {
      console.error("socket connection error:", e);
    });

    socket.addEventListener("close", (e) => {
      console.log("connection closed", e);
    }); 

  })

}

  getData(socketUrl)


  return (
    <div className="lg:grid grid-cols-[1fr_1fr] gap-16 px-12 mt-12 h-[24rem] overflow-y-scroll pb-40">
      <Table title={buyBoardData.title} 
        headers={buyBoardData.headers} 
        rows={buyBoardData.rows} 
        type={buyBoardData.type} />

      <Table title={sellBoardData.title} 
        headers={sellBoardData.headers} 
        rows={sellBoardData.rows} 
        type={sellBoardData.type} />

      <div  className="col-span-2">
        <Table title={logBoardData.title} 
          headers={logBoardData.headers} 
          rows={logDataRows} 
          type={logBoardData.type} />
      </div>
    </div>
  )
}

export default BoardTables
