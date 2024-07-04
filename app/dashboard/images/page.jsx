import UploadModal from "@/app/ui/dashboard/upload-modal";
import ImageTable from "@/app/ui/dashboard/image-table";
import { TableSkeleton } from "@/app/ui/dashboard/skeletons";
import { Suspense } from "react";

export const metadata = { title: "Images" };

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <UploadModal />
      <Suspense fallback={<TableSkeleton />}>
        <p className="absolute -z-10 text-2xl text-slate-200 ml-4 mt-36">No images...</p>
        <ImageTable />
      </Suspense>
    </main>
  )
}