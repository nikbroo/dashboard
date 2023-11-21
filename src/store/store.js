import { configureStore } from '@reduxjs/toolkit'
import itemReducer from "../reducers/itemSlice"
import dataReducer from '../reducers/dataSlice'

export const store = configureStore({
  reducer: {
      items: itemReducer,
      data: dataReducer,
  },
})