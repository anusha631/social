// 'use client';

// import { ArrowLeft } from 'lucide-react';
// import { Button } from '../components/ui/button';
// import { Textarea } from '../components/ui/textarea';
// import Link from 'next/link'

// interface InitialViewProps {
//   onChooseFile: () => void;
//   onBack: () => void;
// }

// export default function InitialView({ onChooseFile, onBack }: InitialViewProps) {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="flex items-center px-4 h-14 border-b">
//         <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <h1 className="ml-4 text-xl font-semibold">New post</h1>
//       </header>

//       {/* Main Content */}
//       <main className="p-4 space-y-4">
//         {/* Text Input Area */}
//         <div className="relative bg-gray-50 rounded-lg p-4">
//           <Textarea
//             placeholder="What's on your mind?"
//             className="min-h-[120px] resize-none border-0 bg-transparent p-0 focus-visible:ring-0 text-base placeholder:text-gray-500"
//           />
//         </div>

//         {/* File Options */}
//         <Link href="/mediaView" passHref>
//         <button
//           onClick={onChooseFile}

//           className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200"
//         >
//           <span className="text-red-500 mr-2">📁</span>
//           <span>Choose the file</span>

//         </button>
//         </Link>

//         <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200">
//           <span className="text-blue-500 mr-2">📸</span>
//           <span>Camera</span>
//         </button>
//       </main>

//       {/* Footer */}
//       <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
//         <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6">
//           CREATE
//         </Button>
//       </div>

//       {/* Alternate View */}
//       {/* <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
//         <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome to the Initial View</h1>
//         <button
//           onClick={onChooseFile}
//           className="px-6 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition"
//         >
//           Choose File
//         </button>
//         <button
//           onClick={onBack}
//           className="mt-4 px-6 py-2 bg-gray-400 text-white rounded shadow-lg hover:bg-gray-500 transition"
//         >
//           Back
//         </button>
//       </div> */}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import Link from "next/link";

export default function InitialView() {
  const [postContent, setPostContent] = useState("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleCreatePost = () => {
    // Implement post creation logic here
    console.log("Creating post:", postContent);
    // After creating the post, you might want to navigate to a different page
    // router.push('/feed');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center px-4 h-14 border-b">
        <button
          onClick={handleBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full"
        >
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
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>

        {/* File Options */}
        <Link href="/mediaView" passHref>
          <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-red-500 mr-2">📁</span>
            <span>Choose the file</span>
          </button>
        </Link>

        <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-blue-500 mr-2">📸</span>
          <span>Camera</span>
        </button>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button
          className="w-full bg-black text-white hover:bg-black/90 rounded-full py-6"
          onClick={handleCreatePost}
        >
          CREATE
        </Button>
      </div>
    </div>
  );
}
