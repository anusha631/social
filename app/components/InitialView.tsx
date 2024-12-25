import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'

interface InitialViewProps {
  onChooseFile: () => void
}

export default function InitialView({ onChooseFile }: InitialViewProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center px-4 h-14 border-b">
        <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-xl font-semibold">New post</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-4">
        {/* Text Input Area */}
        <div className="relative bg-gray-50 rounded-lg p-4">
          <Textarea
            placeholder="What's on your mind?"
            className="min-h-[120px] resize-none border-0 bg-transparent p-0 focus-visible:ring-0 text-base placeholder:text-gray-500"
          />
          {/* User Avatars */}
         
        </div>

        {/* File Options */}
        <button
          onClick={onChooseFile}
          className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200"
        >
          <span className="text-red-500 mr-2">📁</span>
          <span>Choose the file</span>
        </button>

        <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-blue-500 mr-2">📸</span>
          <span>Camera</span>
        </button>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6">
          CREATE
        </Button>
      </div>
    </div>
  )
}

