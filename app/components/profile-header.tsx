import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProfileHeaderProps {
  isEditing?: boolean
}

export function ProfileHeader({ isEditing = false }: ProfileHeaderProps) {
  return (
    <div className="relative h-48 bg-gradient-to-b from-rose-100 to-rose-200">
      <div className="absolute top-4 left-4">
        <Link href="#" className="text-gray-800">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>
      {isEditing && (
        <div className="absolute top-4 right-4 space-x-2">
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
            <Image src="/placeholder.svg?height=24&width=24" alt="Edit cover" width={24} height={24} className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

