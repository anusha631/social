import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PhotoState {
  selectedPhotos: string[]
  images: string[]
  caption: string
}

const initialState: PhotoState = {
  selectedPhotos: [],
  images: [],
  caption: ''
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    togglePhotoSelection: (state, action: PayloadAction<string>) => {
      const photoId = action.payload
      const index = state.selectedPhotos.indexOf(photoId)
      if (index === -1) {
        state.selectedPhotos.push(photoId)
      } else {
        state.selectedPhotos.splice(index, 1)
      }
    },
    clearSelection: (state) => {
      state.selectedPhotos = []
    },
    addImage: (state, action: PayloadAction<string>) => {
      state.images.push(action.payload)
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.images.splice(action.payload, 1)
    },
    setCaption: (state, action: PayloadAction<string>) => {
      state.caption = action.payload
    }
  }
})

export const { 
  togglePhotoSelection, 
  clearSelection, 
  addImage, 
  removeImage, 
  setCaption 
} = photoSlice.actions

export default photoSlice.reducer