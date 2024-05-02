/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ekvx8K8jvrJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MicIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden h-full bg-gray-950 dark:bg-gray-950 lg:block">
        <div className="flex h-full flex-col justify-between px-4 py-6">
          <div className="space-y-6">
            <Link className="flex items-center space-x-3 text-gray-50" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="text-lg font-semibold">Voice Chat App</span>
            </Link>
            <nav className="space-y-1">
              {/* <Link
                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-5 w-5 mr-3" />
                Home
              </Link>
              <Link
                className="flex items-center rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium text-gray-50"
                href="#"
              >
                <MessageCircleIcon className="h-5 w-5 mr-3" />
                Channels
              </Link>
              <Link
                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-50"
                href="#"
              >
                <UserIcon className="h-5 w-5 mr-3" />
                Profile
              </Link>
              <Link
                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-5 w-5 mr-3" />
                Settings
              </Link> */}
            </nav>
          </div>
          <div className="space-y-3">
            <Button className="text-gray-400" size="icon" variant="ghost">
              <LogOutIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 sm:px-6">
          <h1 className="text-lg font-semibold text-gray-50">Channels</h1>
          <div className="flex items-center space-x-2">
            <Button className="text-gray-50" size="icon" variant="ghost">
              <SettingsIcon className="h-5 w-5" />
            </Button>
            <Button className="text-gray-50" size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-gray-800 px-4 py-3 text-sm text-gray-50">
                <p>Hey, how's it going?</p>
                <p className="text-xs text-gray-400">10:30 AM</p>
              </div>
            </div>
            <div className="flex justify-end items-start space-x-3">
              <div className="rounded-lg bg-[#6B46C1] px-4 py-3 text-sm text-gray-50">
                <p>
                  Pretty good, just working on some new features for the app.
                </p>
                <p className="text-xs text-gray-400">10:32 AM</p>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-gray-800 px-4 py-3 text-sm text-gray-50">
                <p>That's great, let me know if you need any help!</p>
                <p className="text-xs text-gray-400">10:34 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-gray-800 px-4 py-3 text-sm text-gray-50">
                <p>I'm doing well, thanks for asking!</p>
                <p className="text-xs text-gray-400">10:36 AM</p>
              </div>
            </div>
            <div className="flex justify-end items-start space-x-3">
              <div className="rounded-lg bg-[#6B46C1] px-4 py-3 text-sm text-gray-50">
                <p>
                  That's great to hear! I'm excited to see what you come up
                  with.
                </p>
                <p className="text-xs text-gray-400">10:38 AM</p>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-gray-800 px-4 py-3 text-sm text-gray-50">
                <p>
                  I'm sure it's going to be great. Can't wait to see the final
                  product!
                </p>
                <p className="text-xs text-gray-400">10:40 AM</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center bg-gradient-to-r from-[#6B46C1] to-[#805AD5] px-4 py-3 sm:px-6">
          <Input
            className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-offset-2 focus:ring-offset-gray-950"
            placeholder="Type your message..."
            type="text"
          />
          <Button
            className="ml-2 rounded-lg bg-gradient-to-r from-[#ffffff] to-[#cccccc] text-gray-50 hover:bg-gradient-to-r hover:from-[#cccccc] hover:to-[#d2d2d2] hover:text-white"
            size="icon"
            variant="ghost"
          >
            <MicIcon className="h-5 w-5 text-purple-600" />
          </Button>
          <Button
            className="ml-2 rounded-lg bg-gradient-to-r from-[#ffffff] to-[#cccccc] text-gray-50 hover:bg-gradient-to-r hover:from-[#cccccc] hover:to-[#d2d2d2]  hover:text-white"
            size="icon"
            variant="ghost"
          >
            <SendIcon className="h-5 w-5 text-purple-600" />
          </Button>
        </footer>
      </div>
    </div>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
