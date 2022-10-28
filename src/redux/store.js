import { configureStore } from '@reduxjs/toolkit'
import contactstore  from './slice/Contactreducer'

export const store = configureStore({
  reducer: {
    contacts:contactstore
  }
})