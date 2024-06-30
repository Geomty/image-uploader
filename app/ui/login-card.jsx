import LoginForm from "./login-form";

export default function LoginCard() {
  return (
    <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-fit md:h-fit w-full h-full p-12 flex flex-col gap-12 items-center justify-center
      bg-slate-500 md:rounded-4xl md:shadow-xl md:hover:shadow-2xl md:shadow-rose-300 md:hover:shadow-rose-300 transition ease-out">
      <h1 className="text-center font-bold text-6xl text-slate-200">Image Uploader</h1>
      <LoginForm />
    </div>
  )
}