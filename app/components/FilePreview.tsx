import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '../components/ui/button'

interface FilePreviewProps {
  file: File
  onClose: () => void
}

export default function FilePreview({ file, onClose }: FilePreviewProps) {
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  if (!preview) return null

  return (
    <div className="relative">
      {file.type.startsWith('image/') ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
      ) : (
        <video src={preview} controls className="w-full h-auto rounded-lg" />
      )}
      <Button
        variant="secondary"
      
        className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
        onClick={onClose}
      >
        <X className="w-4 h-4 text-white" />
      </Button>
    </div>
  )
}

