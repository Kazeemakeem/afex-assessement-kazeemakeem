import React from 'react'
import BoardTables from './BoardTables'
import ChartCard from './ChartCard'
import Header from './Header'
import LiveMarket from './LiveMarket'
import NavBar from './NavBar'
import chart_1 from "../images/chart_1.jpg"
import chart_2 from "../images/chart_2.jpg"
import chart_3 from "../images/chart_3.jpg"



const Main = () => {

  return (
    <div className="bg-[#fff] py-12 relative h-screen">
      <Header />
      <div className="grid grid-cols-3 px-12 mt-20 flex justify-between items-center gap-12">
        <ChartCard tag="Cash Balance" amount="N 8,374,763" trend="Decline" chart={chart_1}/>
        <ChartCard tag="Securities Value" amount="N 8,374,763" trend="Decline" chart={chart_2}/>
        <ChartCard tag="Loan Balance" amount="N 8,374,763" trend="Increment" chart={chart_3}/>
      </div>
      <NavBar />
      <section>
        <BoardTables />
      </section>
      <LiveMarket />
    </div>
  )
}

export default Main
