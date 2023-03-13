import React from 'react'
import { logBoardData } from '../data'
import { buyBoardData } from '../data'
import { sellBoardData } from '../data'
import {Table} from './BoardTable'


const BoardTables = () => {

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-16 px-12 mt-12 h-[28rem] overflow-y-scroll pb-20">
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
          rows={logBoardData.rows} 
          type={logBoardData.type} />
      </div>

    </div>
  )
}

export default BoardTables
