import { configureStore } from "@reduxjs/toolkit";
import { authAPI } from "./features/auth/api";

export const store = configureStore({
  reducer:{
    [authAPI.reducerPath]:authAPI.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({}).concat(
    authAPI.middleware
  )
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
// Store Dispatch Type
export type AppDispatch = typeof store.dispatch
