import CopyButton from "@/app/ui/dashboard/copy-button";
import DeleteButton from "@/app/ui/dashboard/delete-button";
import { list } from "@vercel/blob";
import { parseDate } from "@/app/lib/utils";
import bytes from "bytes";

export default async function ImageTable() {
  const buttonStyle = "pt-1 pb-1 pl-3 pr-3 bg-rose-300 rounded-full text-xl text-slate-800";
  const blobList = await list();
  blobList.blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());

  return (
    <table className="bg-slate-500 rounded-3xl md:mt-8 mt-4 border-separate w-full">
      <tbody>
        {blobList.blobs.map(b => {
          return (
            <tr key={b.url} className={`pt-8 pb-8 ml-8 mr-8 flex md:flex-row flex-col items-center md:justify-between border-b-4 border-slate-800 last:border-b-0`}>
              <td className="md:w-[30rem] w-full"><img src={b.url} className="md:max-h-96 max-h-56 m-auto" /></td>
              <td className="text-2xl text-slate-200 break-words text-center md:max-w-[30vw] max-w-full md:mt-0 md:mb-0 mt-4 mb-4">Name: {b.pathname}<br />Date: {parseDate(b.uploadedAt)}<br />Size: {bytes.format(b.size, { decimalPlaces: 1, unitSeparator: " " })}</td>
              <td className="flex flex-col md:items-end items-center">
                <CopyButton buttonStyle={buttonStyle} url={b.url} />
                <DeleteButton buttonStyle={buttonStyle} url={b.url} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}