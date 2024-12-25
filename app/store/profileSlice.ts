import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProfileState {
  name: string
  bio: string
  avatar: string
  backgroundImage: string
  posts: Array<{
    id: number
    image: string
    title: string
    likes: number
  }>
  isEditing: boolean
}

const initialState: ProfileState = {
  name: 'Sakshi Agarwal',
  bio: 'Just someone who loves designing, sketching, and finding beauty in the little things 💕',
  avatar: '/image/p5.jpg.jpg',
  backgroundImage: '/image/p1.jpg.jpg',
  posts: [
    {
      id: 1,
      image: '/image/p4.jpg.jpg',
      title: 'Design meet',
      likes: 67
    },
    {
      id: 2,
      image: '/image/p3.jpg.jpg',
      title: 'Working on a B2B...',
      likes: 40
    },
    {
      id: 3,
      image: '/image/p2.jpg.jpg',
      title: 'Parachute ❤️',
      likes: 65
    }
  ],
  isEditing: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{ name: string; bio: string }>) => {
      state.name = action.payload.name
      state.bio = action.payload.bio
    },
    toggleEdit: (state) => {
      state.isEditing = !state.isEditing
    }
  }
})

export const { updateProfile, toggleEdit } = profileSlice.actions
export default profileSlice.reducer

