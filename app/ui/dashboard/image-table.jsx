import { CopyButton, EditButton, DeleteButton } from "@/app/ui/dashboard/buttons";
import { list } from "@vercel/blob";
import Info from "@/app/ui/dashboard/info";
import { unstable_noStore as noStore } from "next/cache";

export default async function ImageTable({ session }) {
  noStore();
  const blobList = await list();
  blobList.blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());

  return (
    <table className="bg-slate-500 rounded-3xl border-separate w-full">
      <tbody>
        {blobList.blobs.map(b => {
          return (
            <tr key={b.url} className={`pt-8 pb-8 ml-8 mr-8 flex md:flex-row flex-col items-center md:justify-between border-b-4 border-slate-800 last:border-b-0`}>
              <td className="md:w-[30rem] w-full"><img src={b.url} className="md:max-h-96 max-h-56 m-auto" /></td>
              <Info b={b} />
              <td className="flex flex-col gap-2 md:items-end items-center">
                <CopyButton url={b.url} />
                <EditButton />
                <DeleteButton session={session} url={b.url} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}