"use client";
 
import { useEffect } from "react";
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error]);
 
  return (
    <main className="flex flex-col h-[calc(100vh-6rem)] items-center justify-center">
      <p className="text-xl text-slate-200">Something went wrong...</p>
      <button className="mt-4 p-2 text-xl text-slate-200 bg-slate-500 rounded-xl hover:bg-slate-600 transition" onClick={() => reset()}>Try again</button>
    </main>
  )
}