import React, {useState} from 'react'
import { Layout, ChartLineUp, Bag, Users, FileText, GearSix, DeviceMobile, ArrowLeft } from "@phosphor-icons/react"
import logo from "../images/comex_logo.jpg"

type IconObj = {
  Icon: React.ReactElement;
  hoverText: String;
  positionIndex: Number;
};

const setIconIndex = (positionIndex: Number) => {
  setIconIndex(positionIndex)
}


const AsideNav = () => {

  const navIcon = (Icon: React.ReactElement, hoverText: String, positionIndex: Number) => (
    <div key={positionIndex as number} className="relative">
      <div 
      onClick={() => setIconIndex(positionIndex as React.SetStateAction<number>)}
      className={`flex items-center justify-center z-0 group ${positionIndex === iconIndex ? "bg-gray-100" : ""} w-16 h-16 rounded-lg cursor-pointer`}>
        {Icon}
        <div className="opacity-0 group-hover:opacity-100 bg-black text-white duration-300 absolute z-10 flex justify-center items-center text-xl top-0 right-[-60px] p-2 rounded-lg">{hoverText}</div>
      </div>
    </div>
      )

  const [ iconIndex, setIconIndex ] = useState(1)

  const icons : IconObj[] = [ 
    {
      Icon: <Layout size={24} color={`${iconIndex   === 0 ? "red" : "gray"}`} />,
      hoverText: "Dashboard",
      positionIndex: 0
  
    }, 
    {
      Icon: <ChartLineUp size={24} color={`${iconIndex  === 1 ? "red" : "gray"}`} />,
      hoverText: "Market",
      positionIndex: 1
  
    }, 
    {
      Icon: <Bag size={24} color={`${iconIndex  === 2 ? "red" : "gray"}`} />,
      hoverText: "Portfolio",
      positionIndex: 2
  
    }, 
    {
      Icon: <Users size={24} color={`${iconIndex  === 3 ? "red" : "gray"}`} />,
      hoverText: "Community",
      positionIndex: 3
  
    }, 
    {
      Icon: <FileText size={24} color={`${iconIndex  === 4 ? "red" : "gray"}`} />,
      hoverText: "Report",
      positionIndex: 4
  
    }, 
    {
      Icon: <GearSix size={24} color={`${iconIndex  === 5 ? "red" : "gray"}`} />,
      hoverText: "Settings",
      positionIndex: 5
  
    }, 
    {
      Icon: <DeviceMobile size={24} color={`${iconIndex  === 6 ? "red" : "gray"}`} />,
      hoverText: "Logout",
      positionIndex: 6
  
    }, 
    
  ]
  

  return (
    <div className="flex flex-col justify-between items center h-screen border py-8">
      <div className="flex flex-col gap-12 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="comex_logo"
            className='object-cover' />
        </div>
        <div className="flex flex-col gap-12">
          {icons.slice(0,5).map(icon => (
            navIcon(icon.Icon, icon.hoverText, icon.positionIndex)
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center justify-center">
        {icons.slice(5).map(icon => (
            navIcon(icon.Icon, icon.hoverText, icon.positionIndex)
          ))}
      </div>
    </div>
  )
}

export default AsideNav
