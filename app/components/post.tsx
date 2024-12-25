// "use client";

// import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Heart, MessageCircle, Share2, Send } from "lucide-react";
// import { ShareDialog } from "./share-dialog";
// import { Input } from "../components/ui/input";

// interface PostProps {
//   id: number;
//   username: string;
//   avatar: string;
//   content: string;
//   image: string;
//   likes: number;
//   comments: Comment[];
//   shares: number;
// }

// interface Comment {
//   username: string;
//   avatar: string;
//   content: string;
// }

// export function Post({
//   id,
//   username,
//   avatar,
//   content,
//   image,
//   likes: initialLikes,
//   comments: initialComments,
//   shares,
// }: PostProps) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [likes, setLikes] = useState(initialLikes);
//   const [comments, setComments] = useState(initialComments);
//   const [newComment, setNewComment] = useState("");
//   const [showShareDialog, setShowShareDialog] = useState(false);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLikes(isLiked ? likes - 1 : likes + 1);
//   };

//   const handleComment = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         {
//           username: "You",
//           avatar: "https://i.pravatar.cc/150?img=0",
//           content: newComment.trim(),
//         },
//       ]);
//       setNewComment("");
//     }
//   };

//   return (
//     <Card className="w-full max-w-3xl mx-auto">
//       <CardHeader className="flex flex-row items-center gap-4">
//         <Avatar>
//           <AvatarImage src={avatar} alt={username} />
//           <AvatarFallback>{username[0]}</AvatarFallback>
//         </Avatar>
//         <div className="flex flex-col">
//           <p className="text-sm font-semibold text-black">{username}</p>
//           <p className="text-xs text-gray-500">2 hours ago</p>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <p className="text-sm text-black">{content}</p>
//         <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
//           <img
//             src={image}
//             alt="Post image"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </CardContent>
//       <CardFooter className="flex flex-col gap-4">
//         <div className="flex justify-between w-full">
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleLike}
//             className={isLiked ? "text-red-500" : "text-black"}
//           >
//             <Heart
//               className="w-4 h-4 mr-2"
//               fill={isLiked ? "currentColor" : "none"}
//             />
//             {likes}
//           </Button>
//           <Button variant="ghost" size="sm" className="text-black">
//             <MessageCircle className="w-4 h-4 mr-2" />
//             {comments.length}
//           </Button>
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={() => setShowShareDialog(true)}
//             className="text-black"
//           >
//             <Share2 className="w-4 h-4 mr-2" />
//             {shares}
//           </Button>
//         </div>
//         <div className="w-full space-y-4">
//           {comments.map((comment, index) => (
//             <div key={index} className="flex items-start gap-2">
//               <Avatar className="w-6 h-6">
//                 <AvatarImage src={comment.avatar} />
//                 <AvatarFallback>{comment.username[0]}</AvatarFallback>
//               </Avatar>
//               <div className="flex-1">
//                 <p className="text-sm font-semibold text-black">
//                   {comment.username}
//                 </p>
//                 <p className="text-sm text-black">{comment.content}</p>
//               </div>
//             </div>
//           ))}
//           <form onSubmit={handleComment} className="flex gap-2">
//             <Input
//               placeholder="Add a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="flex-1 text-black"
//             />
//             <Button type="submit" size="sm" className="text-black">
//               <Send className="w-4 h-4" />
//             </Button>
//           </form>
//         </div>
//       </CardFooter>
//       <ShareDialog
//         open={showShareDialog}
//         onClose={() => setShowShareDialog(false)}
//         url={`https://yourdomain.com/posts/${id}`}
//       />
//     </Card>
//   );
// }

"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Heart, MessageCircle, Share2, Send } from "lucide-react";
import { ShareDialog } from "./share-dialog";
import { Input } from "../components/ui/input";
import Image from "next/image";

interface PostProps {
  id: number;
  username: string;
  avatar: string;
  content: string;
  image: string;
  likes: number;
  comments: Comment[];
  shares: number;
}

interface Comment {
  username: string;
  avatar: string;
  content: string;
}

export function Post({
  id,
  username,
  avatar,
  content,
  image,
  likes: initialLikes,
  comments: initialComments,
  shares,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [showShareDialog, setShowShareDialog] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          username: "You",
          avatar: "https://i.pravatar.cc/150?img=0",
          content: newComment.trim(),
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-black">{username}</p>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-black">{content}</p>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image src={image} alt="Post image" layout="fill" objectFit="cover" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={isLiked ? "text-red-500" : "text-black"}
          >
            <Heart
              className="w-4 h-4 mr-2"
              fill={isLiked ? "currentColor" : "none"}
            />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-black">
            <MessageCircle className="w-4 h-4 mr-2" />
            {comments.length}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowShareDialog(true)}
            className="text-black"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {shares}
          </Button>
        </div>
        <div className="w-full space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-start gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={comment.avatar} alt={comment.username} />
                <AvatarFallback>{comment.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-semibold text-black">
                  {comment.username}
                </p>
                <p className="text-sm text-black">{comment.content}</p>
              </div>
            </div>
          ))}
          <form onSubmit={handleComment} className="flex gap-2">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 text-black"
            />
            <Button type="submit" size="sm" className="text-black">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </CardFooter>
      <ShareDialog
        open={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        url={`https://yourdomain.com/posts/${id}`}
      />
    </Card>
  );
}
