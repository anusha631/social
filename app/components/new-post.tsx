'use client'

import { useState } from 'react'
import { ArrowLeft, Camera, Video } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'


export default function NewPost() {
  const [content, setContent] = useState('')
  
  const handleFileSelect = (type: 'photo' | 'video' | 'camera') => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = type === 'video' ? 'video/*' : 'image/*'
    if (type === 'camera') {
      input.capture = 'environment'
    }
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        // Handle the selected file
        console.log('Selected file:', file)
      }
    }
    
    input.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 md:bg-gray-100 md:py-8">
      <div className="mx-auto max-w-2xl bg-white min-h-screen md:min-h-0 md:rounded-xl md:shadow-sm">
        {/* Header */}
        <header className="flex items-center px-4 h-14 border-b">
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold">New post</h1>
        </header>

        {/* Main Content */}
        <main className="p-4 space-y-4">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[120px] resize-none border-0 focus-visible:ring-0 text-lg p-0 placeholder:text-gray-500"
          />

          {/* Media Options */}
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start text-base font-normal h-auto py-3"
              onClick={() => handleFileSelect('photo')}
            >
              <span className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-green-600" />
                <span>Photos</span>
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-base font-normal h-auto py-3"
              onClick={() => handleFileSelect('video')}
            >
              <span className="flex items-center gap-3">
                <Video className="w-5 h-5 text-red-600" />
                <span>Video</span>
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start text-base font-normal h-auto py-3"
              onClick={() => handleFileSelect('camera')}
            >
              <span className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-blue-600" />
                <span>Camera</span>
              </span>
            </Button>
          </div>
        </main>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:relative md:border-t-0">
          <Button 
            className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6 text-base"
            disabled={!content && true}
          >
            CREATE
          </Button>
        </div>
      </div>
    </div>
  )
}

