import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VideoState {
  videos: string[] // Array to hold video URLs
  caption: string | null // Caption for the post
}

const initialState: VideoState = {
  videos: [],
  caption: null,
}

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      state.videos.push(action.payload)
    },
    removeVideo: (state, action: PayloadAction<number>) => {
      state.videos.splice(action.payload, 1)
    },
    setCaption: (state, action: PayloadAction<string>) => {
      state.caption = action.payload
    },
  },
})

export const { addVideo, removeVideo, setCaption } = videoSlice.actions
export default videoSlice.reducer
