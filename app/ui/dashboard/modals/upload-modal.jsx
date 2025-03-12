"use client";

import { upload } from "@vercel/blob/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BaseModal from "@/app/ui/dashboard/modals/base-modal";
import { buttonStyle } from "@/app/lib/utils";
import { deleteImage } from "@/app/lib/actions";

export default function UploadModal({ file, setFile, fileRef = null, setError, editing, url }) {
  const [fileName, setFileName] = useState(file.name);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  return (
    <BaseModal h={<>
      <div className="w-full flex md:flex-row flex-col items-center gap-3">
        <p className="text-2xl text-slate-200 text-center">File name:</p>
        <input className="h-7 flex-grow bg-slate-500 border-b-2 border-slate-200 text-2xl text-slate-200" autoFocus value={fileName} onChange={event => setFileName(event.target.value)}></input>
      </div>
      <div className="md:flex hidden flex-col items-center gap-1">
        <p className="text-2xl text-slate-200">Preview:</p>
        <img className="max-h-96" src={URL.createObjectURL(file)} />
      </div>
      <div className="w-full flex justify-end items-center gap-6">
        <button className={`${buttonStyle} text-2xl`} onClick={() => {
          setFile(null);
          if (fileRef) fileRef.current.value = "";
        }} disabled={uploading}>Cancel</button>

        <form action={deleteImage} onSubmit={async event => {
          if (!editing) event.preventDefault();
          setUploading(true);
          try {
            await upload(fileName, file, {
              access: "public",
              handleUploadUrl: "/api/upload"
            });
            router.refresh();
            setUploading(false);
            setFile(null);
            if (fileRef) fileRef.current.value = "";
          } catch (error) {
            setUploading(false);
            if (fileRef) fileRef.current.value = "";
            setError(true);
          }
        }}>
          <button
            name="url"
            value={url}
            type="submit"
            disabled={uploading}
            className={`${buttonStyle} text-2xl`}
          >{editing ? (uploading ? "Editing..." : "Edit") : (uploading ? "Uploading..." : "Upload")}</button>
        </form>
      </div>
    </>} />
  )
}