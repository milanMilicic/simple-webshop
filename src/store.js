import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/slices/cartSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
  }
})