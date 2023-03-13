import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'

const Modal = () => {

  const modal = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()


  return (
    <div>

    </div>
  )
}

export default Modal
