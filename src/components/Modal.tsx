import React, {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { prodCodes } from '../data'
import { boardCat } from '../data'
import { toggleModal } from '../slices/modalSlice'

const Modal = () => {

  const [boardButtonIndex, setBoardButtonIndex] = useState(0) 
  const [prodButtonIndex, setProdButtonIndex] = useState(0) 

  const modalOpen = useAppSelector(state => state.modal.modalOpen)
  const dispatch = useAppDispatch()

  const boardButton = (text: String, index: Number, label: String) => (
    <div 
      onClick={label === "board" ? () => setBoardButtonIndex(index as React.SetStateAction<number>) : () => setProdButtonIndex(index as React.SetStateAction<number>)}
      className={`flex gap-4 px-6 py-2 ${index === (label === "board" ? boardButtonIndex : prodButtonIndex) ? "bg-red-500 text-white" : "bg-white text-gray-600"} items-center justify-center rounded-lg border border-1 border-gray-300 cursor-pointer active:text-red-700 flex items-center justify-center `}>
    {text}
  </div>
  )

  const actionButton = (color: String, text: String, textColor:String) => (
    <div className={`px-6 py-4 items-center justify-center rounded-lg border border-1 border-gray-200 cursor-pointer flex items-center justify-center bg-${color} text-${textColor} hover:bg-${textColor} hover:text-${color}`}>
      {text}
    </div>
  )

  return (
    modalOpen && <div className="">
      <div 
        onClick={() => dispatch(toggleModal(!modalOpen))}
        className="absolute h-screen w-screen bg-black opacity-50 z-1000 col-span-2 top-0 left-0"></div>
      <div className="absolute top-48 right-56 h-[56rem] w-[46rem] bg-white p-12 rounded-3xl">
        <div className="w-12 h-12 bg-white absolute top-[-1rem] right-28 translate transform rotate-45"></div>
        <h2 className="text-4xl font-semibold text-gray-700">Page Settings</h2>
        <div className="text-2xl mt-16 flex flex-col gap-8">
          <h3 className="font-bold text-3xl text-gray-500">Board</h3>
          <div className="flex gap-4 flex-wrap">
            {boardCat.map((cat, index) => (
              <span key={index} className="">
                {boardButton(cat, index, "board")}
              </span>
            ))}
          </div>
        </div>

        <div className="text-2xl mt-16 flex flex-col gap-8">
          <h3 className="font-bold text-3xl text-gray-500">Product</h3>
          <div className="flex gap-4 flex-wrap">
            {prodCodes.map((code, index) => (
              <span key={index} className="">
                {boardButton(code, index, "product")}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-16 font-bold text-3xl text-gray-500 pb-16 border-b-2 border-gray-200">
          <label className="flex gap-4">
            <input type="checkbox" style={{width: 20}}/>
            Sticky header
          </label>
        </div>
        <div className="flex text-3xl justify-end mt-16 gap-12">
            {actionButton("white","Reset", "gray-500")}
            {actionButton("red-500","Apply", "white")}
        </div>
      </div>
    </div>
  )
}

export default Modal
