export default function Footer() {
  const chip = "p-4 w-fit text-center bg-orange-300 rounded-full";

  return (
    <footer className="w-full h-fit p-10 bg-slate-400 text-3xl text-slate-800">
      <p className="font-bold text-slate-800 mb-8 md:text-start text-center">Features:</p>
      <div className="flex flex-col gap-4 md:items-start items-center">
        <p className={`md:ml-64 ${chip}`}>Custom file names!</p>
        <p className={`md:ml-auto md:mr-56 ${chip}`}>Drag and drop support!</p>
        <p className={`md:ml-6 ${chip}`}>Multiple passwords with different file permissions!</p>
      </div>
    </footer>
  )
}