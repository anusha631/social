// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "../components/ui/dialog";
// import { X } from "lucide-react";
// import { Button } from "../components/ui/button";

// interface ShareDialogProps {
//   open: boolean;
//   onClose: () => void;
//   url: string;
// }

// const shareOptions = [
//   {
//     name: "Twitter",
//     icon: "/twitter.svg",
//     url: (link: string) =>
//       `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`,
//   },
//   {
//     name: "Facebook",
//     icon: "/facebook.svg",
//     url: (link: string) =>
//       `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//         link
//       )}`,
//   },
//   {
//     name: "Reddit",
//     icon: "/reddit.svg",
//     url: (link: string) =>
//       `https://reddit.com/submit?url=${encodeURIComponent(link)}`,
//   },
//   {
//     name: "Discord",
//     icon: "/discord.svg",
//     url: (link: string) => `https://discord.com/channels/@me`,
//   },
//   {
//     name: "WhatsApp",
//     icon: "/whatsapp.svg",
//     url: (link: string) => `https://wa.me/?text=${encodeURIComponent(link)}`,
//   },
//   {
//     name: "Messenger",
//     icon: "/messenger.svg",
//     url: (link: string) =>
//       `https://www.messenger.com/share?link=${encodeURIComponent(link)}`,
//   },
//   {
//     name: "Telegram",
//     icon: "/telegram.svg",
//     url: (link: string) =>
//       `https://t.me/share/url?url=${encodeURIComponent(link)}`,
//   },
//   {
//     name: "Instagram",
//     icon: "/instagram.svg",
//     url: () => `https://instagram.com`,
//   },
// ];

// export function ShareDialog({ open, onClose, url }: ShareDialogProps) {
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(url);
//       alert("Link copied to clipboard!");
//     } catch (err) {
//       console.error("Failed to copy text: ", err);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>Share post</DialogTitle>
//           <Button
//             variant="ghost"
//             className="absolute right-4 top-4"
//             onClick={onClose}
//           >
//             <X className="h-4 w-4" />
//             <span className="sr-only">Close</span>
//           </Button>
//         </DialogHeader>
//         <div className="grid grid-cols-4 gap-4 p-4">
//           {shareOptions.map((option) => (
//             <a
//               key={option.name}
//               href={option.url(url)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex flex-col items-center gap-2"
//             >
//               <div className="rounded-full bg-muted p-3">
//                 <img src={option.icon} alt={option.name} className="h-6 w-6" />
//               </div>
//               <span className="text-xs">{option.name}</span>
//             </a>
//           ))}
//         </div>
//         <div className="p-4 space-y-2">
//           <div className="font-semibold">Page Link</div>
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               value={url}
//               readOnly
//               className="flex-1 px-3 py-2 border rounded-md text-sm"
//             />
//             <Button variant="outline" onClick={copyToClipboard}>
//               Copy
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "../components/ui/button";

interface ShareDialogProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

const shareOptions = [
  {
    name: "Twitter",
    icon: "/twitter.svg",
    url: (url: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },
  {
    name: "Facebook",
    icon: "/facebook.svg",
    url: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "Reddit",
    icon: "/reddit.svg",
    url: (url: string) =>
      `https://reddit.com/submit?url=${encodeURIComponent(url)}`,
  },
  {
    name: "Discord",
    icon: "/discord.svg",
    url: () => `https://discord.com/channels/@me`,
  },
  {
    name: "WhatsApp",
    icon: "/whatsapp.svg",
    url: (url: string) => `https://wa.me/?text=${encodeURIComponent(url)}`,
  },
  {
    name: "Messenger",
    icon: "/messenger.svg",
    url: (url: string) =>
      `https://www.messenger.com/share?link=${encodeURIComponent(url)}`,
  },
  {
    name: "Telegram",
    icon: "/telegram.svg",
    url: (url: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}`,
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    url: () => `https://instagram.com`,
  },
];

export function ShareDialog({ open, onClose, url }: ShareDialogProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share post</DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4 p-4">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.url(url)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <div className="rounded-full bg-muted p-3">
                <Image
                  src={option.icon}
                  alt={option.name}
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs">{option.name}</span>
            </a>
          ))}
        </div>
        <div className="p-4 space-y-2">
          <div className="font-semibold">Page Link</div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="flex-1 px-3 py-2 border rounded-md text-sm"
            />
            <Button variant="outline" onClick={copyToClipboard}>
              Copy
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
