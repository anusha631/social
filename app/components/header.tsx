// import Link from "next/link";
// import { Bell, Home, MessageCircle, Search, User } from 'lucide-react';
// import { Button } from "../components/ui/button";

// export function Header() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 shadow-lg">
//       <div className="container flex h-16 items-center">
//         {/* Logo Section */}
//         <div className="mr-4 hidden md:flex">
//           <Link href="/" className="mr-6 flex items-center space-x-2">
//             <span className="text-white font-bold text-2xl sm:inline-block">SocialFeed</span>
//           </Link>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
//           <nav className="flex items-center space-x-4">
//             {/* Home Button */}
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out" asChild>
//               <Link href="/">
//                 <Home className="h-5 w-5" />
//                 <span className="sr-only">Home</span>
//               </Link>
//             </Button>

//             {/* Search Button */}
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out" asChild>
//               <Link href="/search">
//                 <Search className="h-5 w-5" />
//                 <span className="sr-only">Search</span>
//               </Link>
//             </Button>

//             {/* Messages Button */}
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out" asChild>
//               <Link href="/messages">
//                 <MessageCircle className="h-5 w-5" />
//                 <span className="sr-only">Messages</span>
//               </Link>
//             </Button>

//             {/* Notifications Button */}
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out" asChild>
//               <Link href="/notifications">
//                 <Bell className="h-5 w-5" />
//                 <span className="sr-only">Notifications</span>
//               </Link>
//             </Button>

//             {/* Profile Button */}
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out" asChild>
//               <Link href="../profile-view">  {/* Fixed path to direct to the Profile page */}
//                 <User className="h-5 w-5" />
//                 <span className="sr-only">Profile</span>
//               </Link>
//             </Button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import { Bell, Home, MessageCircle, Search, User } from "lucide-react";
import { Button } from "../components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 shadow-lg">
      <div className="container flex h-16 items-center">
        {/* Logo Section */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-white font-bold text-2xl sm:inline-block">
              SocialFeed
            </span>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <nav className="flex items-center space-x-4">
            {/* Home Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out p-2"
              asChild
            >
              <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>

            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out p-2"
              asChild
            >
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>

            {/* Messages Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out p-2"
              asChild
            >
              <Link href="/messages">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Link>
            </Button>

            {/* Notifications Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out p-2"
              asChild
            >
              <Link href="/notifications">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>

            {/* Profile Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-full transition duration-200 ease-in-out p-2"
              asChild
            >
              <Link href="/profile-view">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
