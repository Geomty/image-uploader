export const metadata = { title: "404" };

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <p className="text-2xl text-slate-200">Nothing to see here...</p>
      <a href="/" className="mt-4 p-2 text-2xl text-slate-200 bg-slate-500 rounded-xl hover:bg-slate-600 transition">Go home</a>
    </main>
  )
}