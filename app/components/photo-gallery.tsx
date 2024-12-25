'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { togglePhotoSelection } from '../store/photoSlice'
import { X, MoreVertical, Check } from 'lucide-react'
import { cn } from '@/app/lib/utils'

const photos = {
  recent: [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ],
  tuesday: [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ]
}

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState<'Photos' | 'Albums'>('Photos')
  const selectedPhotos = useSelector((state: RootState) => state.photos.selectedPhotos)
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <button className="p-2">
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
              <div className="grid grid-cols-3 gap-1">
                {photos.recent.map((photo, index) => (
                  <div key={index} className="relative aspect-square">
                    <img
                      src={photo}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => dispatch(togglePhotoSelection(String(index)))}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                      style={{
                        backgroundColor: selectedPhotos.includes(String(index))
                          ? '#3b82f6'
                          : 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      {selectedPhotos.includes(String(index)) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4">Tuesday</h2>
              <div className="grid grid-cols-3 gap-1">
                {photos.tuesday.map((photo, index) => (
                  <div key={index} className="relative aspect-square">
                    <img
                      src={photo}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => dispatch(togglePhotoSelection(`tuesday-${index}`))}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                      style={{
                        backgroundColor: selectedPhotos.includes(`tuesday-${index}`)
                          ? '#3b82f6'
                          : 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      {selectedPhotos.includes(`tuesday-${index}`) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

