import { configureStore } from '@reduxjs/toolkit'
import dataBookReducer from '../store/slices/dataBookSlice'

export const store = configureStore({
  reducer: {
    data: dataBookReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch