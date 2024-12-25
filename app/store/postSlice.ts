import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  content: string
  file: File | null
  isSubmitting: boolean
}

const initialState: PostState = {
  content: '',
  file: null,
  isSubmitting: false
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    },
    setFile: (state, action: PayloadAction<File | null>) => {
      state.file = action.payload
    },
    setIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload
    },
    resetPost: (state) => {
      state.content = ''
      state.file = null
      state.isSubmitting = false
    }
  }
})

export const { setContent, setFile, setIsSubmitting, resetPost } = postSlice.actions
export default postSlice.reducer