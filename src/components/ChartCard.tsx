import React from 'react'



export type ChartCardProps = {
  tag: String;
  amount: String;
  trend: String;
  chart: String;

}

const ChartCard = ({tag, amount, trend, chart} : ChartCardProps) => {
  return (
    <div className="flex flex-col p-8 border border-1 border-gray-100 gap-4 justify-center rounded-2xl shadow">
      <p className="text-2xl font-semibold">{tag}</p>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-16">
          <p className="text-5xl font-bold">{amount}</p>
          <div className="flex gap-6 text-xl items-center">
            <div className={`${trend === "Decline" ? "bg-red-50" : "bg-green-50"} rounded-lg`}>
              <p className={`${trend === "Decline" ? "text-red-700" : "text-green-700"} py-1 px-2`}>{trend}</p>
            </div>
            <p className="text-gray-600">Monitored Monthly</p>
          </div>
        </div>
        <div className={`flex items-center justify-center w-[22rem] h-40 mb-12`}>
          <img src={`${chart}`} alt="chart_image" 
          className="w-full h-full"/>
        </div>
      </div>
    </div>
  )
}

export default ChartCard
