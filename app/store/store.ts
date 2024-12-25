import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileSlice'
import videoReducer from './videoSlice'
import photoReducer from './photoSlice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    video: videoReducer,
    photos: photoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch