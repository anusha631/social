'use client'

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { ArrowLeft, Heart, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ProfileViewProps {
  onAddPost: () => void
}

function ProfileView({ onAddPost }: ProfileViewProps) {
  const router = useRouter()
  const { name, bio, avatar, backgroundImage, posts } = useSelector((state: RootState) => state.profile)

  const handleEditProfile = () => {
    router.push('../edit-profile-view')
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
        <Link href="/" className="absolute top-4 left-4 text-white z-10">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Profile Info */}
      <div className="px-4 -mt-16 relative z-10">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={avatar}
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full border-4 border-white object-cover"
          />
        </div>
        <button
          onClick={handleEditProfile}
          className="w-full py-2 px-4 mb-6 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Edit Profile
        </button>
        <h1 className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
        <p className="text-gray-600 mb-6">{bio}</p>
        <h2 className="text-xl font-bold mb-4 text-gray-800">My Posts</h2>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={500}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-medium">{post.title}</p>
              <div className="flex items-center gap-1 text-white">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-xs">{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Post Button */}
      <Link href="/initialView" passHref>
        <button
          onClick={onAddPost}
          className="fixed bottom-6 right-6 p-4 bg-blue-600 rounded-full text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700"
        >
          <Plus className="w-6 h-6" />
        </button>
      </Link>
    </div>
  )
}

export default ProfileView

