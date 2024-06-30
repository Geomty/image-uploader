"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { PhotoIcon, KeyIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";
import { signOut } from "@/app/lib/actions";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-500 h-16 pl-4 pr-4 flex items-center select-none md:justify-between justify-around">
      <div className="flex items-center gap-14 md:justify-normal justify-around">
        <a href="/" className={`font-bold text-slate-200 text-2xl md:block hidden`}>Image Uploader</a>
        {[["Images", PhotoIcon], ["Passwords", KeyIcon], ["Options", Cog6ToothIcon]].map(i => {
          const path = `/dashboard/${i[0].toLowerCase()}`
          const Icon = i[1];

          return (
            <Link key={i[0]} href={path} className={`flex gap-2 rounded-full p-2 hover:bg-slate-700 transition ${path === pathname ? " bg-slate-800" : ""}`}>
              <Icon className="fill-slate-200 w-8" />
              <p className="text-slate-200 text-2xl md:block hidden">{i[0]}</p>
            </Link>
          )
        })}
      </div>
      <form action={signOut}>
        <button className="pt-1 pb-1 pl-3 pr-3 text-slate-200 text-2xl rounded-full bg-slate-600 hover:cursor-pointer" type="submit">Sign out</button>
      </form>
    </nav>
  )
}