"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { PhotoIcon, KeyIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-500 h-16 flex flex-row items-center md:justify-normal justify-around">
      <a href="/" className={`ml-4 font-bold text-slate-200 text-2xl md:block hidden`}>Image Uploader</a>
      {[["Images", PhotoIcon], ["Passwords", KeyIcon], ["Options", Cog6ToothIcon]].map(i => {
        const path = `/dashboard/${i[0].toLowerCase()}`
        const Icon = i[1];

        return (
          <Link key={i[0]} href={path} className={`md:ml-14 flex rounded-full p-2 hover:bg-slate-700 transition ${path === pathname ? " bg-slate-800" : ""}`}>
            <Icon className="fill-slate-200 w-8 flex-1" />
            <p className="text-slate-200 text-2xl ml-1 md:block hidden">{i[0]}</p>
          </Link>
        )
      })}
    </nav>
  )
}