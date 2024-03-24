import LoginForm from "./login-form";

export default function LoginCard() {
  return (
    <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-fit md:h-fit w-screen h-screen p-12 flex flex-col items-center justify-center
      bg-slate-500 md:rounded-4xl md:shadow-xl md:hover:shadow-2xl md:shadow-green-100 md:hover:shadow-green-100 transition">
      <h1 className="text-center font-bold text-6xl text-slate-200">Image Uploader</h1>
      <LoginForm />
    </div>
  )
}