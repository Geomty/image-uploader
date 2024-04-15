"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadButton() {
  const router = useRouter();
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  return (
    <form onSubmit={async event => {
      event.preventDefault();
      setUploading(true);
      const file = fileRef.current.files[0];
      await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload"
      });
      router.refresh();
      setUploading(false);
    }} className="md:w-auto w-full md:block flex justify-center">
      <label className={`pt-1 pb-1 pl-3 pr-3 inline-block md:m-4 bg-rose-300 rounded-full text-3xl text-slate-800 ${!uploading && "hover:cursor-pointer"} select-none`}>{uploading ? "Uploading..." : "Upload"}</label>
      <input id="upload" type="file" accept="image/*" ref={fileRef} onChange={event => {
        event.currentTarget.nextElementSibling.click();
        setUploading(true);
      }} className="hidden" />
      <button className="hidden" type="submit"></button>
    </form>
  )
}