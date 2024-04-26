import { ArrowRightIcon } from "@heroicons/react/20/solid"

export default function LoginForm() {
  return (
    <form className="mt-12 flex items-center gap-3">
      <label className="text-2xl text-slate-200" htmlFor="password">Password:</label>
      <input className="h-7 bg-slate-200 rounded-md" type="password" id="password" required autoFocus></input>
      <button className="bg-slate-200 rounded-md"><ArrowRightIcon className="size-7 fill-slate-500" /></button>
    </form>
  )
}