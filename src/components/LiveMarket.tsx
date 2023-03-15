import React, {useEffect, useState} from 'react'
import Marquee from "react-fast-marquee"
import { sellBoardData } from '../data'
import { decrypt } from '../utils'
import { NumericFormat } from 'react-number-format'


const LiveMarket = () => {

  // console.log(process.env.REACT_APP_KEY, process.env.REACT_APP_VECTOR)
  
  const [marketData, setMarketData] = useState<any[]>([])

  useEffect(() => {
    fetch('https://comx-sand-api.afex.dev/api/security-price/live')
      .then(response => response.json())
      .then(data => setMarketData((data.data)))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="flex h-20 fixed bottom-0 left-30 bg-white w-full">
      <div className="bg-black text-white w-48 flex justify-center items-center text-2xl">
        <p>Live Market</p>
      </div>
      <Marquee
      pauseOnClick={true}
      pauseOnHover={true}
      speed={20}
      gradient={false}
      
      >{/* @ts-ignore */}
        { marketData.length ? marketData?.map(item => (
          <div key={item.security_code}
            className={`w-full text-xl flex gap-10 sm:justify-between`}>
            {/* @ts-ignore */}
            <div >
              {/* @ts-ignore */}
              <p>{decrypt(item['security_code'])}</p>
              <NumericFormat
                value={decrypt(item.price) as number}
                thousandSeparator=","
                displayType="text"
                prefix="₦"
              />
            </div>
          </div>
        )) : <div className="text-3xl font-bold"><p>Loading...</p></div>}
      </Marquee>
    </div>
  )
}

export default LiveMarket
