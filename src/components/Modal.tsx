import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'

const Modal = () => {

  const modal = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()


  return (
    <div>
      <div className="h-screen w-screen bg-black opacity-50"></div>

    </div>
  )
}

export default Modal
