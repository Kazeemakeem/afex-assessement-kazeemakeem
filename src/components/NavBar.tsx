import React, {useState} from 'react'



const NavBar = () => {

  const [navIndex, setNavIndex] = useState(1) 

  const navItem = (text: String, count: Number | null, itemNavIndex: Number) => (
    <li
    onClick={() => setNavIndex(itemNavIndex as React.SetStateAction<number>)} 
    className='cursor-pointer'><a href='#' className={`hover:text-gray-600 active:text-red-600 py-4 ${navIndex === itemNavIndex ? "border-b-2 border-red-600 text-red-600" : ""}`}>{text}
    {count? <span className="ml-4 text-gray-700 bg-gray-100 px-2 py-1 rounded-xl">{count as React.ReactNode}</span> : null }</a></li>
  )

  const navListItems = ["Product View", "Order Book", "Price History", "Open Orders", "Closed Trades", "Canceled Trades"]
  
  return (
    <div className="px-12 mt-20">
      <ul className='flex gap-12 font-semibold text-gray-400 text-2xl pt-3 h-full'>
        {navListItems.map((item, index) => (
          index > 2 ? navItem(item, 20, index) : navItem(item, null, index)
        ))}
      </ul>
    </div>
  )
}

export default NavBar
