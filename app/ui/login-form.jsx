"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useFormState } from "react-dom";
import { signIn } from "@/app/lib/actions";

export default function LoginForm() {
  const [error, action] = useFormState(signIn);

  return (
    <div className="flex flex-col items-center">
      <form className="flex items-center gap-3" action={action}>
        <label className="text-2xl text-slate-200" htmlFor="password">Password:</label>
        <input className="h-7 bg-slate-200 rounded-md" name="password" type="password" id="password" required autoFocus></input>
        <button className="bg-slate-200 rounded-md"><ArrowRightIcon className="size-7 fill-slate-500" /></button>
      </form>
      <p className="absolute mt-10 text-xl text-red-600">{error}</p>
    </div>
  )
}