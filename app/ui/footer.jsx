export default function Footer() {
  const chip = "mb-4 p-4 w-fit text-center bg-slate-700 rounded-full";

  return (
    <footer className="w-full h-fit p-10 bg-rose-300 text-3xl text-rose-300">
      <p className="font-bold text-slate-800 mb-8">Features:</p>
      <ul>
        <li className={`ml-64 ${chip}`}>Custom file names!</li>
        <li className={`ml-auto mr-56 ${chip}`}>Drag and drop support!</li>
        <li className={`ml-6 ${chip}`}>Multiple passwords with different file permissions!</li>
      </ul>
    </footer>
  )
}