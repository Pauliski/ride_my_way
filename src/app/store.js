import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/passenger/userSlice'
import driverReducer from '../features/passenger/driverSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    driver: driverReducer
  }
})