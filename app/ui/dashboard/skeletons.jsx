export function TableSkeleton() {
  return (
    <div className="bg-slate-500 rounded-3xl mt-4 w-full">
      <ImageSkeleton />
      <div className="ml-8 mr-8 w-auto h-1 bg-slate-600"></div>
      <ImageSkeleton />
    </div>
  )
}

function ImageSkeleton() {
  return (
    <div className="pt-8 pb-8 ml-8 mr-8 flex md:flex-row flex-col items-center md:justify-between">
      <div className="w-[30rem] md:h-72 h-56 max-w-full bg-slate-600 rounded-xl"></div>
      <div className="flex flex-col md:m-8 m-4">
        <LongLine />
        <LongLine />
        <LongLine last={true} />
      </div>
      <div className="flex flex-col">
        <ShortLine />
        <ShortLine last={true} />
      </div>
    </div>
  )
}

function LongLine({ last }) {
  return <div className={`w-72 h-4 bg-slate-600 ${!last && "mb-4"}`}></div>
}

function ShortLine({ last }) {
  return <div className={`w-28 h-8 bg-slate-600 ${!last && "mb-4"}`}></div>
}