"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const buttonStyle = "pt-1 pb-1 pl-3 pr-3 bg-rose-300 rounded-full text-2xl text-slate-800";

export default function UploadModal() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <AnimatePresence>
        {file && <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className="top-0 left-0 z-10 fixed w-full h-full bg-black"></motion.div>

          <motion.div initial={{ opacity: 0, top: "48%" }} animate={{ opacity: 1, top: "50%" }} exit={{ opacity: 0, top: "48%" }} transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className="z-20 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit p-8
          flex flex-col justify-center gap-8 md:items-end items-center bg-slate-500 md:rounded-4xl rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="text-2xl text-slate-200 text-center">File name:</div>
              <input className="h-7 w-56 bg-slate-500 border-b-2 border-slate-200 text-2xl text-slate-200" autoFocus value={fileName} onChange={event => setFileName(event.target.value)}></input>
            </div>
            <div className="flex items-center gap-6">
              <button className={buttonStyle} onClick={() => {
                setFile(null);
                setFileName("");
                fileRef.current.value = "";
              }} disabled={uploading}>Cancel</button>
              <UploadButton file={file} setFile={setFile} fileName={fileName} setFileName={setFileName} uploading={uploading} setUploading={setUploading} fileRef={fileRef} />
            </div>
          </motion.div>
        </>}
      </AnimatePresence>

      <div className="md:m-4 flex md:items-start items-center">
        <label htmlFor="uploadFile" className="pt-1 pb-1 pl-3 pr-3 md:m-0 m-auto bg-rose-300 rounded-full text-3xl text-slate-800 hover:cursor-pointer select-none">Upload</label>
        <input id="uploadFile" type="file" accept="image/*" ref={fileRef} onChange={() => {
          setFile(fileRef.current.files[0]);
          setFileName(fileRef.current.files[0].name);
        }} className="hidden" />
      </div>
    </>
  )
}

function UploadButton({ file, setFile, fileName, setFileName, uploading, setUploading, fileRef }) {
  const router = useRouter();

  return (
    <form onSubmit={async event => {
      event.preventDefault();
      setUploading(true);
      await upload(fileName, file, {
        access: "public",
        handleUploadUrl: "/api/upload"
      });
      router.refresh();
      setUploading(false);
      setFile(null);
      setFileName("");
      fileRef.current.value = "";
    }} className="md:w-auto w-full md:block flex justify-center">
      <button className={buttonStyle} type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload"}</button>
    </form>
  )
}