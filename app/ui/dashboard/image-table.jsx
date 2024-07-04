import CopyButton from "@/app/ui/dashboard/copy-button";
import DeleteButton from "@/app/ui/dashboard/delete-button";
import { list } from "@vercel/blob";
import Info from "@/app/ui/dashboard/info";
import { unstable_noStore as noStore } from "next/cache";

export default async function ImageTable({ buttonStyle }) {
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
              <td className="flex flex-col md:items-end items-center">
                <CopyButton buttonStyle={`${buttonStyle} text-xl`} url={b.url} />
                <DeleteButton buttonStyle={`${buttonStyle} text-xl`} url={b.url} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}