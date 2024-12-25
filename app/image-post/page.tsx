// 'use client'

// import { useRouter } from 'next/navigation'
// import { useDispatch, useSelector } from 'react-redux'
// import { ArrowLeft, ImageIcon, Trash2 } from 'lucide-react'
// import { RootState } from '../store/store'
// import { addImage, removeImage, setCaption } from '../store/photoSlice'
// import Image from 'next/image'

// export default function ImagePost() {
//   const router = useRouter()
//   const dispatch = useDispatch()
//   const { images, caption } = useSelector((state: RootState) => state.photos)

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const imageUrl = URL.createObjectURL(file)
//       dispatch(addImage(imageUrl))
//     }
//   }

//   const defaultCaption = "Surrounded by nature's beauty, finding peace in every leaf, breeze, and sunset. 🌿🌅\n#NatureVibes #OutdoorEscape #EarthLover"

//   return (
//     <div className="min-h-screen bg-white"> {/* Changed background color to white */}
//       <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
//         {/* Header */}
//         <div className="flex items-center gap-4 p-4 border-b border-gray-100">
//           <button
//             onClick={() => router.back()}
//             className="text-black hover:opacity-70"
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </button>
//           <h1 className="text-lg font-medium">New post</h1>
//         </div>

//         {/* Content Container */}
//         <div className="flex-1 flex flex-col">
//           {/* Image Preview */}
//           <div className="p-4">
//             <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg mb-2">
//               {images.length > 0 ? (
//                 <>
//                   <Image
//                     src={images[0]}
//                     alt="Post preview"
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                   <div className="absolute top-2 right-2 flex items-center gap-2">
//                     <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
//                       1/2
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => dispatch(removeImage(0))}
//                     className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full text-white"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </>
//               ) : (
//                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
//                   Add a photo
//                 </div>
//               )}
//             </div>

//             {/* Dot Indicator */}
//             <div className="flex justify-center mb-4">
//               <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
//             </div>

//             {/* Add Photos Button */}
//             <label className="flex items-center gap-3 cursor-pointer mb-6">
//               <div className="w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded">
//                 <ImageIcon className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-base font-bold">Add more Photos</span>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </label>
//           </div>

//           {/* Caption Area */}
//           <div className="flex-1 bg-[#F5F5F5] p-6">
//             <p className="text-base leading-relaxed">
//               Surrounded by nature's beauty, finding peace in every leaf, breeze, and sunset. 🌿🌅
//             </p>
//             <p className="mt-2">
//               <span className="text-[#1D9BF0]">#NatureVibes </span>
//               <span className="text-[#1D9BF0]">#OutdoorEscape </span>
//               <span className="text-[#1D9BF0]">#EarthLover</span>
//             </p>
//           </div>
//         </div>

//         {/* Create Button */}
//         <div className="p-4">
//           <button
//             onClick={() => {
//               // Add your post creation logic here
//               router.push('/')
//             }}
//             className="w-full bg-black text-white py-4 rounded-[32px] font-medium text-base"
//           >
//             CREATE
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, ImageIcon, Trash2 } from "lucide-react";
import { RootState } from "../store/store";
import { addImage, removeImage } from "../store/photoSlice";
import Image from "next/image";

export default function ImagePost() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { images } = useSelector((state: RootState) => state.photos);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(addImage(imageUrl));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b border-gray-100">
          <button
            onClick={() => router.back()}
            className="text-black hover:opacity-70"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">New post</h1>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col">
          {/* Image Preview */}
          <div className="p-4">
            <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg mb-2">
              {images.length > 0 ? (
                <>
                  <Image
                    src={images[0]}
                    alt="Post preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      1/2
                    </span>
                  </div>
                  <button
                    onClick={() => dispatch(removeImage(0))}
                    className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full text-white"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Add a photo
                </div>
              )}
            </div>

            {/* Dot Indicator */}
            <div className="flex justify-center mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>

            {/* Add Photos Button */}
            <label className="flex items-center gap-3 cursor-pointer mb-6">
              <div className="w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded">
                <ImageIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold">Add more Photos</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Caption Area */}
          <div className="flex-1 bg-[#F5F5F5] p-6">
            <p className="text-base leading-relaxed">
              Surrounded by nature&apos;s beauty, finding peace in every leaf,
              breeze, and sunset. 🌿🌅
            </p>
            <p className="mt-2">
              <span className="text-[#1D9BF0]">#NatureVibes </span>
              <span className="text-[#1D9BF0]">#OutdoorEscape </span>
              <span className="text-[#1D9BF0]">#EarthLover</span>
            </p>
          </div>
        </div>

        {/* Create Button */}
        <div className="p-4">
          <button
            onClick={() => {
              // Add your post creation logic here
              router.push("/");
            }}
            className="w-full bg-black text-white py-4 rounded-[32px] font-medium text-base"
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}
