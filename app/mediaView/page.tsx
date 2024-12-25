// 'use client';

// import { ArrowLeft, Camera, Video } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import { Textarea } from '../components/ui/textarea';
// import { useRouter } from 'next/navigation';

// export default function MediaView({ onBack }: { onBack: () => void }) {
//   const router = useRouter();

//   const handleFileSelect = (type: 'photo' | 'video' | 'camera') => {
//     if (type === 'photo') {
//       router.push('/photo-gallery');
//       return;
//     }
//     if (type === 'video') {
//       router.push('/video-gallery');
//       return;
//     }

//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = type === 'video' ? 'video/*' : 'image/*';
//     if (type === 'camera') {
//       input.capture = 'environment';
//     }
//     input.click();
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="flex items-center px-4 h-14 border-b shadow-sm">
//         <button
//           onClick={onBack}
//           className="p-2 -ml-2 hover:bg-gray-200 rounded-full"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <h1 className="ml-4 text-xl font-semibold">New Post</h1>
//       </header>

//       {/* Main Content */}
//       <main className="p-4 space-y-4">
//         <Textarea
//           placeholder="What's on your mind?"
//           className="min-h-[120px] resize-none border-0 bg-gray-100 rounded-lg p-4 focus-visible:ring-2 focus-visible:ring-teal-300 text-base placeholder:text-gray-500"
//         />

//         {/* Media Options */}
//         <div className="space-y-2">
//           <button
//             onClick={() => handleFileSelect('photo')}
//             className="flex items-center w-full p-3 text-left hover:bg-teal-50 rounded-lg border border-gray-200 shadow-sm"
//           >
//             <span className="text-green-500 mr-2">
//               <Camera className="w-5 h-5" />
//             </span>
//             <span className="text-gray-700 font-medium">Photos</span>
//           </button>

//           <button
//             onClick={() => handleFileSelect('video')}
//             className="flex items-center w-full p-3 text-left hover:bg-teal-50 rounded-lg border border-gray-200 shadow-sm"
//           >
//             <span className="text-red-500 mr-2">
//               <Video className="w-5 h-5" />
//             </span>
//             <span className="text-gray-700 font-medium">Video</span>
//           </button>

//           <button
//             onClick={() => handleFileSelect('camera')}
//             className="flex items-center w-full p-3 text-left hover:bg-teal-50 rounded-lg border border-gray-200 shadow-sm"
//           >
//             <span className="text-blue-500 mr-2">
//               <Camera className="w-5 h-5" />
//             </span>
//             <span className="text-gray-700 font-medium">Camera</span>
//           </button>
//         </div>
//       </main>

//       {/* Footer */}
//       <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-md">
//         <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6">
//           CREATE
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { ArrowLeft, Camera, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useRouter } from "next/navigation";

export default function MediaView() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleFileSelect = (type: "photo" | "video" | "camera") => {
    if (type === "photo") {
      router.push("/photo-gallery");
      return;
    }
    if (type === "video") {
      router.push("/video-gallery");
      return;
    }

    const input = document.createElement("input");
    input.type = "file";

    if (type === "camera") {
      input.accept = "image/*";
      input.capture = "environment";
    } else {
      input.accept = "image/*,video/*";
    }

    input.click();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center px-4 h-14 border-b shadow-sm">
        <button
          onClick={handleBack}
          className="p-2 -ml-2 hover:bg-gray-200 rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-xl font-semibold">New Post</h1>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-4">
        <Textarea
          placeholder="What's on your mind?"
          className="min-h-[120px] resize-none border-0 bg-gray-100 rounded-lg p-4 focus-visible:ring-2 focus-visible:ring-teal-300 text-base placeholder:text-gray-500"
        />

        {/* Media Options */}
        <div className="space-y-2">
          <button
            onClick={() => handleFileSelect("photo")}
            className="flex items-center w-full p-3 text-left hover:bg-teal-50 rounded-lg border border-gray-200 shadow-sm"
          >
            <span className="text-green-500 mr-2">
              <Camera className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">Photos</span>
          </button>

          <button
            onClick={() => handleFileSelect("video")}
            className="flex items-center w-full p-3 text-left hover:bg-teal-50 rounded-lg border border-gray-200 shadow-sm"
          >
            <span className="text-red-500 mr-2">
              <Video className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">Video</span>
          </button>

          <button
            onClick={() => handleFileSelect("camera")}
            className="flex items-center w-full p-3 text-left hover:bg-teal-50 rounded-lg border border-gray-200 shadow-sm"
          >
            <span className="text-blue-500 mr-2">
              <Camera className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">Camera</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-md">
        <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6">
          CREATE
        </Button>
      </div>
    </div>
  );
}
