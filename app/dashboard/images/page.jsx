import { UploadButton } from "@/app/ui/dashboard/buttons";
import ImageTable from "@/app/ui/dashboard/image-table";
import { TableSkeleton } from "@/app/ui/dashboard/skeletons";
import { Suspense } from "react";
import { getSession } from "@/app/lib/utils";
import { cookies } from "next/headers";

export const metadata = { title: "Images" };

export default async function Page() {
  const session = await getSession(cookies());

  return (
    <main className="flex flex-col gap-4">
      <UploadButton session={{...session}} />
      <Suspense fallback={<TableSkeleton />}>
        <p className="absolute -z-10 text-2xl text-slate-200 ml-4 mt-36">No images...</p>
        <ImageTable session={{...session}} />
      </Suspense>
    </main>
  )
}