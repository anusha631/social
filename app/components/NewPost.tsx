// 'use client'

// import { useState, useRef } from 'react'
// import { ArrowLeft, ImageIcon, Video, Camera } from 'lucide-react'
// import { Button } from '../components/ui/button'
// import { Textarea } from '../components/ui/textarea'
// import FilePreview from './FilePreview'

// export default function NewPost() {
//   const [content, setContent] = useState('')
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const handleFileSelect = (type: 'photo' | 'video' | 'camera') => {
//     if (fileInputRef.current) {
//       fileInputRef.current.accept = type === 'video' ? 'video/*' : 'image/*'
//       fileInputRef.current.capture = type === 'camera' ? 'environment' : ''
//       fileInputRef.current.click()
//     }
//   }

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       setSelectedFile(file)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="mx-auto max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
//         <header className="flex items-center px-4 py-3 border-b">
//           <Button variant="ghost" size="icon">
//             <ArrowLeft className="w-6 h-6" />
//           </Button>
//           <h1 className="ml-4 text-xl font-semibold text-gray-800">New Post</h1>
//         </header>

//         <main className="p-6 space-y-6">
//           <Textarea
//             placeholder="What's on your mind?"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full min-h-[120px] resize-none border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg rounded-md p-3 placeholder:text-gray-500"
//           />

//           {!selectedFile && (
//             <div className="space-y-4">
//               <Button
//                 variant="outline"
//                 className="w-full justify-start text-base font-medium h-auto py-3 border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50"
//                 onClick={() => handleFileSelect('photo')}
//               >
//                 <ImageIcon className="w-5 h-5 text-green-600 mr-3" />
//                 Add Photos
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full justify-start text-base font-medium h-auto py-3 border-gray-300 rounded-md hover:border-red-500 hover:bg-red-50"
//                 onClick={() => handleFileSelect('video')}
//               >
//                 <Video className="w-5 h-5 text-red-600 mr-3" />
//                 Add Video
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full justify-start text-base font-medium h-auto py-3 border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50"
//                 onClick={() => handleFileSelect('camera')}
//               >
//                 <Camera className="w-5 h-5 text-blue-600 mr-3" />
//                 Use Camera
//               </Button>
//             </div>
//           )}

//           <input
//             type="file"
//             ref={fileInputRef}
//             className="hidden"
//             onChange={handleFileChange}
//           />

//           {selectedFile && <FilePreview file={selectedFile} onClose={() => setSelectedFile(null)} />}
//         </main>

//         <footer className="p-4 bg-gray-50 border-t">
//           <Button
//             className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-md py-3 text-base font-medium"
//             disabled={!content && !selectedFile}
//           >
//             Create Post
//           </Button>
//         </footer>
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useRef } from 'react'
import { ArrowLeft, ImageIcon, Video, Camera } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'
import FilePreview from './FilePreview'

export default function NewPost() {
  const [content, setContent] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (type: 'photo' | 'video' | 'camera') => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = type === 'video' ? 'video/*' : 'image/*'
      fileInputRef.current.capture = type === 'camera' ? 'environment' :'camera/*'
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="flex items-center px-4 py-3 border-b">
          <Button variant="ghost" className="p-2">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">New Post</h1>
        </header>

        <main className="p-6 space-y-6">
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[120px] resize-none border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg rounded-md p-3 placeholder:text-gray-500"
          />

          {!selectedFile && (
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start text-base font-medium h-auto py-3 border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50"
                onClick={() => handleFileSelect('photo')}
              >
                <ImageIcon className="w-5 h-5 text-green-600 mr-3" />
                Add Photos
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-base font-medium h-auto py-3 border-gray-300 rounded-md hover:border-red-500 hover:bg-red-50"
                onClick={() => handleFileSelect('video')}
              >
                <Video className="w-5 h-5 text-red-600 mr-3" />
                Add Video
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-base font-medium h-auto py-3 border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50"
                onClick={() => handleFileSelect('camera')}
              >
                <Camera className="w-5 h-5 text-blue-600 mr-3" />
                Use Camera
              </Button>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          {selectedFile && <FilePreview file={selectedFile} onClose={() => setSelectedFile(null)} />}
        </main>

        <footer className="p-4 bg-gray-50 border-t">
          <Button
            className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-md py-3 text-base font-medium"
            disabled={!content && !selectedFile}
          >
            Create Post
          </Button>
        </footer>
      </div>
    </div>
  )
}
