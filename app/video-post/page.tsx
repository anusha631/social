"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, Video, Trash2 } from "lucide-react";
import { RootState } from "../store/store"; // Make sure this path is correct
import { addVideo, removeVideo, setCaption } from "../store/videoSlice"; // Ensure the path is correct
import { useRef } from "react";

export default function VideoPost() {
  const router = useRouter();
  const dispatch = useDispatch();

  // Safely access the state with fallback values
  const { videos = [], caption = "" } = useSelector(
    (state: RootState) => state.videos || {}
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      dispatch(addVideo(videoUrl));
    }
  };

  const defaultCaption =
    "Capturing life&apos;s beautiful moments in motion. 🎥✨\n#VideoVibes #LifeInMotion #ContentCreator";

  return (
    <div className="min-h-screen bg-white">
      {" "}
      {/* Set outer background to white */}
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
          {/* Video Preview */}
          <div className="p-4">
            <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg mb-2">
              {videos.length > 0 ? (
                <>
                  <video
                    ref={videoRef}
                    src={videos[0]}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    controls
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      1/{videos.length}
                    </span>
                  </div>
                  <button
                    onClick={() => dispatch(removeVideo(0))}
                    className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full text-white"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Add a video
                </div>
              )}
            </div>

            {/* Dot Indicator */}
            <div className="flex justify-center mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>

            {/* Add Videos Button */}
            <label className="flex items-center gap-3 cursor-pointer mb-6">
              <div className="w-6 h-6 bg-[#4CAF50] flex items-center justify-center rounded">
                <Video className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold">Add more Videos</span>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Caption Area */}
          <div className="flex-1 bg-[#F5F5F5] p-6">
            <textarea
              value={caption || defaultCaption}
              onChange={(e) => dispatch(setCaption(e.target.value))}
              className="w-full h-full bg-transparent resize-none text-base leading-relaxed focus:outline-none"
              placeholder="Write a caption..."
            />
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
