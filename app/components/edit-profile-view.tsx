// 'use client'

// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../store/store'
// import { updateProfile, toggleEdit } from '../store/profileSlice'
// import { ArrowLeft, Pencil } from 'lucide-react'
// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export function EditProfileView() {
//   const dispatch = useDispatch()
//   const { name, bio } = useSelector((state: RootState) => state.profile)
//   const [formData, setFormData] = useState({ name, bio })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     dispatch(updateProfile(formData))
//     dispatch(toggleEdit())
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="relative h-48 bg-gradient-to-r from-orange-100 to-orange-300">
//         <Link href="#" className="absolute top-4 left-4 text-gray-800">
//           <ArrowLeft className="w-6 h-6" />
//         </Link>
//         <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-lg font-semibold">
//           Edit Profile
//         </h1>
//       </div>

//       {/* Profile Form */}
//       <form onSubmit={handleSubmit} className="px-4 -mt-16">
//         <div className="relative w-32 h-32 mx-auto mb-6">
//           <Image
//             src="/placeholder.svg?height=128&width=128"
//             alt="Profile"
//             width={128}
//             height={128}
//             className="rounded-full border-4 border-white object-cover"
//           />
//           <button
//             type="button"
//             className="absolute bottom-0 right-0 p-2 bg-black rounded-full text-white shadow-lg"
//           >
//             <Pencil className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Bio
//             </label>
//             <textarea
//               value={formData.bio}
//               onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//               rows={3}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 px-4 mt-6 bg-black text-white rounded-md font-medium"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   )
// }

'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { updateProfile, toggleEdit } from '../store/profileSlice'
import { ArrowLeft, Pencil } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function EditProfileView() {
  const dispatch = useDispatch()
  const { name, bio, avatar, backgroundImage } = useSelector(
    (state: RootState) => state.profile
  )
  const [formData, setFormData] = useState({ name, bio })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(updateProfile(formData))
    dispatch(toggleEdit())
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-48">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
        <Link href="#" className="absolute top-4 left-4 text-white z-10">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-lg font-semibold text-white z-10">
          Edit Profile
        </h1>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="px-4 -mt-16">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src={avatar}
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full border-4 border-white object-cover"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 p-2 bg-black rounded-full text-white shadow-lg"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 mt-6 bg-black text-white rounded-md font-medium"
        >
          Save
        </button>
      </form>
    </div>
  )
}
