// 'use client';

// import { useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { RootState } from '../store/store';
// import { toggleVideoSelection, clearSelection } from '../store/videoSlice';
// import { X, MoreVertical, Check, ChevronRight, Play } from 'lucide-react';
// import { cn } from '@/app/lib/utils';

// const videos = {
//   recent: [
//     '/videos/nature1.mp4',
//     '/videos/nature2.mp4',
//     '/videos/nature3.mp4',
//     '/videos/nature4.mp4',
//     '/videos/nature5.mp4',
//     '/videos/nature6.mp4',
//     '/videos/nature7.mp4',
//     '/videos/nature8.mp4',
//     '/videos/nature9.mp4',
//   ],
//   tuesday: [
//     '/videos/nature10.mp4',
//     '/videos/nature11.mp4',
//     '/videos/nature12.mp4',
//   ],
// };

// export default function VideoGallery() {
//   const [activeTab, setActiveTab] = useState<'Videos' | 'Albums'>('Videos');
//   const selectedVideos = useSelector((state: RootState) => state.videos?.selectedVideos || []);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleVideoSelection = (videoId: string) => {
//     dispatch(toggleVideoSelection(videoId));
//   };

//   const handleNextClick = () => {
//     router.push('../video-post');
//   };

//   const renderVideoGrid = (videoList: string[], source: string) => (
//     <div className="grid grid-cols-3 gap-1">
//       {videoList.map((video, index) => (
//         <VideoThumbnail
//           key={`${source}-${index}`}
//           video={video}
//           isSelected={selectedVideos.includes(`${source}-${index}`)}
//           onSelect={() => handleVideoSelection(`${source}-${index}`)}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="max-w-md mx-auto bg-white min-h-screen">
//       <header className="sticky top-0 z-10 bg-white border-b">
//         <div className="flex items-center justify-between p-4">
//           <button className="p-2" onClick={() => router.back()}>
//             <X className="w-6 h-6" />
//           </button>
//           <div className="flex-1 flex justify-center">
//             <nav className="flex space-x-4">
//               {['Videos', 'Albums'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab as 'Videos' | 'Albums')}
//                   className={cn(
//                     'px-6 py-2 rounded-full text-sm font-medium',
//                     activeTab === tab
//                       ? 'bg-blue-100 text-blue-600'
//                       : 'text-gray-600'
//                   )}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </nav>
//           </div>
//           <button className="p-2">
//             <MoreVertical className="w-6 h-6" />
//           </button>
//         </div>
//       </header>

//       <main className="p-4">
//         {activeTab === 'Videos' && (
//           <div className="space-y-6">
//             <section>
//               <h2 className="text-lg font-medium mb-4">Recent</h2>
//               {videos?.recent && videos.recent.length > 0 ? (
//                 renderVideoGrid(videos.recent, 'recent')
//               ) : (
//                 <p>No recent videos available.</p>
//               )}
//             </section>

//             <section>
//               <h2 className="text-lg font-medium mb-4">Tuesday</h2>
//               {videos?.tuesday && videos.tuesday.length > 0 ? (
//                 renderVideoGrid(videos.tuesday, 'tuesday')
//               ) : (
//                 <p>No videos available for Tuesday.</p>
//               )}
//             </section>
//           </div>
//         )}
//       </main>

//       {selectedVideos.length > 0 && (
//         <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
//           <div className="flex justify-between items-center">
//             <button
//               onClick={() => dispatch(clearSelection())}
//               className="text-blue-600 font-medium"
//             >
//               Clear
//             </button>
//             <span className="text-gray-600">
//               {selectedVideos.length} selected
//             </span>
//             <button
//               onClick={handleNextClick}
//               className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center"
//             >
//               Next
//               <ChevronRight className="w-4 h-4 ml-1" />
//             </button>
//           </div>
//         </footer>
//       )}
//     </div>
//   );
// }

// interface VideoThumbnailProps {
//   video: string;
//   isSelected: boolean;
//   onSelect: () => void;
// }

// function VideoThumbnail({ video, isSelected, onSelect }: VideoThumbnailProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleMouseEnter = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   };

//   return (
//     <div
//       className="relative aspect-square"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <video
//         ref={videoRef}
//         src={video}
//         className="w-full h-full object-cover"
//         muted
//         loop
//         playsInline
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <Play className="w-12 h-12 text-white opacity-50" />
//       </div>
//       <button
//         onClick={onSelect}
//         className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
//         style={{
//           backgroundColor: isSelected ? '#3b82f6' : 'rgba(255, 255, 255, 0.5)',
//         }}
//       >
//         {isSelected && <Check className="w-4 h-4 text-white" />}
//       </button>
//     </div>
//   );
// }
'use client';

import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '../store/store';
import { toggleVideoSelection, clearSelection } from '../store/videoSlice';
import { X, MoreVertical, Check, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/app/lib/utils';

const videos = {
  recent: [
    '/videos/nature1.mp4',
    '/videos/nature2.mp4',
    '/videos/nature3.mp4',
    '/videos/nature4.mp4',
    '/videos/nature5.mp4',
    '/videos/nature6.mp4',
    '/videos/nature7.mp4',
    '/videos/nature8.mp4',
    '/videos/nature9.mp4',
  ],
  tuesday: [
    '/videos/nature10.mp4',
    '/videos/nature11.mp4',
    '/videos/nature12.mp4',
  ],
};

export default function VideoGallery() {
  const [activeTab, setActiveTab] = useState<'Videos' | 'Albums'>('Videos');
  const selectedVideos = useSelector((state: RootState) => state.videos?.selectedVideos || []);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleVideoSelection = (videoId: string) => {
    dispatch(toggleVideoSelection(videoId));
  };

  const handleNextClick = () => {
    router.push('../video-post');
  };

  const renderVideoGrid = (videoList: string[], source: string) => (
    <div className="grid grid-cols-3 gap-1">
      {videoList.map((video, index) => (
        <VideoThumbnail
          key={`${source}-${index}`}
          video={video}
          isSelected={selectedVideos.includes(`${source}-${index}`)}
          onSelect={() => handleVideoSelection(`${source}-${index}`)}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <button className="p-2" onClick={() => router.back()}>
            <X className="w-6 h-6" />
          </button>
          <div className="flex-1 flex justify-center">
            <nav className="flex space-x-4">
              {['Videos', 'Albums'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'Videos' | 'Albums')}
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
        {activeTab === 'Videos' && (
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-medium mb-4">Recent</h2>
              {videos?.recent && videos.recent.length > 0 ? (
                renderVideoGrid(videos.recent, 'recent')
              ) : (
                <p>No recent videos available.</p>
              )}
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4">Tuesday</h2>
              {videos?.tuesday && videos.tuesday.length > 0 ? (
                renderVideoGrid(videos.tuesday, 'tuesday')
              ) : (
                <p>No videos available for Tuesday.</p>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Footer with Next button always visible */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => dispatch(clearSelection())}
            className="text-blue-600 font-medium"
          >
            Clear
          </button>
          <span className="text-gray-600">
            {selectedVideos.length} selected
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
    </div>
  );
}

interface VideoThumbnailProps {
  video: string;
  isSelected: boolean;
  onSelect: () => void;
}

function VideoThumbnail({ video, isSelected, onSelect }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative aspect-square"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="w-12 h-12 text-white opacity-50" />
      </div>
      <button
        onClick={onSelect}
        className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
        style={{
          backgroundColor: isSelected ? '#3b82f6' : 'rgba(255, 255, 255, 0.5)',
        }}
      >
        {isSelected && <Check className="w-4 h-4 text-white" />}
      </button>
    </div>
  );
}
