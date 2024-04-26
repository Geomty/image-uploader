"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const buttonStyle = "pt-1 pb-1 pl-3 pr-3 bg-rose-300 rounded-full text-2xl text-slate-800";

export default function UploadModal() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <div className={`${file ? "block" : "hidden"} top-0 left-0 z-10 fixed w-full h-full bg-black opacity-50`}></div>

      <div className={`${file ? "block" : "hidden"} z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit p-8
      flex flex-col justify-center gap-8 md:items-end items-center bg-slate-500 md:rounded-4xl rounded-2xl`}>
        <div className="flex items-center gap-3">
          <div className="text-2xl text-slate-200 text-center">File name:</div>
          <input className="h-7 w-56 bg-slate-500 border-b-2 border-slate-200 text-2xl text-slate-200" autoFocus></input>
        </div>
        <div className="flex items-center gap-6">
          <button className={buttonStyle} onClick={() => setFile(null)} disabled={uploading}>Cancel</button>
          <UploadButton file={file} setFile={setFile} uploading={uploading} setUploading={setUploading} />
        </div>
      </div>

      <label htmlFor="uploadFile" className="pt-1 pb-1 pl-3 pr-3 inline-block md:m-4 bg-rose-300 rounded-full text-3xl text-slate-800 hover:cursor-pointer select-none">Upload</label>
      <input id="uploadFile" type="file" accept="image/*" ref={fileRef} onChange={() => {
        setFile(fileRef.current.files[0]);
      }} className="hidden" />
    </>
  )
}

function UploadButton({ file, setFile, uploading, setUploading }) {
  const router = useRouter();

  return (
    <form onSubmit={async event => {
      event.preventDefault();
      setUploading(true);
      /*await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload"
      });*/
      setTimeout(() => {
        router.refresh();
        setUploading(false);
        setFile(null);
      }, 2000);
    }} className="md:w-auto w-full md:block flex justify-center">
      <button className={buttonStyle} type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload"}</button>
    </form>
  )
}