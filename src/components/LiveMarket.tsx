import React from 'react'
import Marquee from "react-fast-marquee"
import { sellBoardData } from '../data'

const LiveMarket = () => {
  return (
    <div className="flex h-20 absolute bottom-0 left-0 bg-white w-full">
      <div className="bg-black text-white w-48 flex justify-center items-center text-2xl">
        <p>Live Market</p>
      </div>
      <Marquee
      pauseOnClick={true}
      pauseOnHover={true}
      speed={20}
      gradient={false}

      >
        {sellBoardData.rows.map((item, index) => (
          <div className="w-full flex justify-between text-xl">
            <div key={index}>
              <p>{item[0]}</p>
              <p>N30,384.59</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default LiveMarket
