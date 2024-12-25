import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export function PostGrid() {
  const posts = useSelector((state: RootState) => state.profile.posts)

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="relative rounded-xl overflow-hidden">
          <Image src={post.image} alt={post.title} width={300} height={300} className="w-full aspect-square object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="text-sm font-medium">{post.title}</p>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span className="text-xs">{post.likes}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

