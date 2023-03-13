import React from 'react'
import { CaretRight, Sliders, CaretDown} from "@phosphor-icons/react"
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleModal } from '../slices/modalSlice'

const Header = () => {

 const modalOpen = useAppSelector(state => state.modal.modalOpen)

 const dispatch = useAppDispatch()



  return (
    <div>
      <div className="flex gap-4 text-2xl px-12 text-bold">
        <p>Home</p>
        <div className="flex justify-center items-center">
          <CaretRight color="gray"/>
        </div>
        <p className="text-red-500">Market</p>
      </div>
      <div className="px-12 flex justify-between items-center">
        <h2 className="font-bold text-5xl mt-16">Market</h2>
        <div className="flex gap-8 text-xl font-semibold">
          <div 
            onClick={() => dispatch(toggleModal(!modalOpen))}
            className="flex gap-4 px-4 py-1 bg-white items-center justify-center rounded-lg border border-1 border-gray-300 cursor-pointer active:text-red-700">
            <span>Page Settings</span>
            <div>
              <Sliders size={20}/>
            </div>
          </div>
          <div className="flex gap-4 px-4 py-1 bg-white items-center justify-center rounded-lg border border-1 border-gray-300 cursor-pointer active:text-red-700">
            <span>Demo</span>
            <div>
              <CaretDown size={20}/>
            </div>
          </div>
        </div>
      </div>
      <p className="px-12 mt-6 text-2xl text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default Header
