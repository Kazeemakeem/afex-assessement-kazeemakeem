import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../slices/modalSlice'


const store = configureStore({
    reducer: {
        modal: modalReducer,
    },

})

export default store
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch