import UploadModal from "@/app/ui/dashboard/upload-modal";
import ImageTable from "@/app/ui/dashboard/image-table";
import { TableSkeleton } from "@/app/ui/dashboard/skeletons";
import { Suspense } from "react";

export const metadata = { title: "Images" };

export default function Page() {
  const buttonStyle = "pt-1 pb-1 pl-3 pr-3 bg-orange-300 rounded-full text-slate-800";

  return (
    <main className="flex flex-col gap-4">
      <UploadModal buttonStyle={buttonStyle} />
      <Suspense fallback={<TableSkeleton />}>
        <p className="absolute -z-10 text-2xl text-slate-200 ml-4 mt-36">No images...</p>
        <ImageTable buttonStyle={buttonStyle} />
      </Suspense>
    </main>
  )
}