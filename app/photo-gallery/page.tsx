'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { RootState } from '../store/store'
import { togglePhotoSelection, clearSelection } from '../store/photoSlice'
import { X, MoreVertical, Check, ChevronRight } from 'lucide-react'
import { cn } from '@/app/lib/utils'

const photos = {
  recent: [
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
  ],
  tuesday: [
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
    'https://www.naturephotographie.com/wp-content/uploads/2019/02/Rays-of-Light-on-the-Summit-1461x975.jpg',
  ],
}

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState<'Photos' | 'Albums'>('Photos')
  const selectedPhotos = useSelector((state: RootState) => state.photos.selectedPhotos)
  const dispatch = useDispatch()
  const router = useRouter()

  const handlePhotoSelection = (photoId: string) => {
    dispatch(togglePhotoSelection(photoId))
  }

  const handleNextClick = () => {
    router.push('../image-post')
  }

  const renderPhotoGrid = (photoList: string[], source: string) => (
    <div className="grid grid-cols-3 gap-1">
      {photoList.map((photo, index) => (
        <div key={`${source}-${index}`} className="relative aspect-square">
          <img
            src={photo}
            alt="Photo"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => handlePhotoSelection(`${source}-${index}`)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
            style={{
              backgroundColor: selectedPhotos.includes(`${source}-${index}`)
                ? '#3b82f6'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {selectedPhotos.includes(`${source}-${index}`) && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      ))}
    </div>
  )

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <button className="p-2" onClick={() => router.back()}>
            <X className="w-6 h-6" />
          </button>
          <div className="flex-1 flex justify-center">
            <nav className="flex space-x-4">
              {['Photos', 'Albums'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'Photos' | 'Albums')}
                  className={cn(
                    'px-6 py-2 rounded-full text-sm font-medium',
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600'
                  )}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <button className="p-2">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="p-4">
        {activeTab === 'Photos' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-medium mb-4">Recent</h2>
              {renderPhotoGrid(photos.recent, 'recent')}
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4">Tuesday</h2>
              {renderPhotoGrid(photos.tuesday, 'tuesday')}
            </section>
          </div>
        )}
      </main>

      {selectedPhotos.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => dispatch(clearSelection())}
              className="text-blue-600 font-medium"
            >
              Clear
            </button>
            <span className="text-gray-600">
              {selectedPhotos.length} selected
            </span>
            <button 
              onClick={handleNextClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </footer>
      )}
    </div>
  )
}