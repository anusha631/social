import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface ProfileAvatarProps {
  isEditing?: boolean
}

export function ProfileAvatar({ isEditing = false }: ProfileAvatarProps) {
  const avatar = useSelector((state: RootState) => state.profile.avatar)

  return (
    <div className="relative -mt-16 mb-4">
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white">
        <Image src={avatar} alt="Profile" fill className="object-cover" />
      </div>
      {isEditing && (
        <button className="absolute bottom-0 right-1/3 p-2 rounded-full bg-white shadow">
          <Image src="/placeholder.svg?height=24&width=24" alt="Edit avatar" width={24} height={24} className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

