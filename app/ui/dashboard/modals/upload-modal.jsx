"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import BaseModal from "@/app/ui/dashboard/modals/base-modal";
import BlockedModal from "@/app/ui/dashboard/modals/blocked-modal";
import { buttonStyle } from "@/app/lib/utils";

export default function UploadModal({ session }) {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dnd, setDnd] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <>
      <AnimatePresence>
        {file && <BaseModal h={<>
          <div className="w-full flex items-center gap-3">
            <div className="text-2xl text-slate-200 text-center">File name:</div>
            <input className="h-7 flex-grow bg-slate-500 border-b-2 border-slate-200 text-2xl text-slate-200" autoFocus value={fileName} onChange={event => setFileName(event.target.value)}></input>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl text-slate-200">Preview:</div>
            <img className="max-h-96" src={URL.createObjectURL(file)} />
          </div>
          <div className="w-full flex justify-end items-center gap-6">
            <button className={`${buttonStyle} text-2xl`} onClick={() => {
              setFile(null);
              setFileName("");
              fileRef.current.value = "";
            }} disabled={uploading}>Cancel</button>
            <UploadButton file={file} setFile={setFile} fileName={fileName} setFileName={setFileName} uploading={uploading} setUploading={setUploading} fileRef={fileRef} buttonStyle={buttonStyle} />
          </div>
        </>} />}

        {blocked && <BlockedModal setBlocked={setBlocked} />}
      </AnimatePresence>

      <label onDragOver={event => {
        event.preventDefault();
        setDnd(true);
      }} onDragLeave={event => {
        event.preventDefault();
        setDnd(false);
      }} onDrop={event => {
        event.preventDefault();
        setDnd(false);
        if (session.write) {
          setFile(event.dataTransfer.files[0]);
          setFileName(event.dataTransfer.files[0].name);
        } else {
          setBlocked(true);
        }
      }} onClick={() => {
        if (!session.write) {
          setBlocked(true);
        }
      }} htmlFor={session.write ? "uploadFile" : ""} className={`flex justify-center items-center w-full h-28 ${dnd ? "bg-slate-400" : "bg-slate-300"} hover:bg-slate-400 transition rounded-3xl text-3xl text-slate-800 hover:cursor-pointer select-none`}>Upload or drag and drop</label>
      <input id="uploadFile" type="file" accept="image/*" ref={fileRef} onChange={() => {
        // just in case
        if (session.write) {
          setFile(fileRef.current.files[0]);
          setFileName(fileRef.current.files[0].name);
        } else {
          setBlocked(true);
        }
      }} className="hidden" />
    </>
  )
}

function UploadButton({ file, setFile, fileName, setFileName, uploading, setUploading, fileRef, buttonStyle }) {
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
    }}>
      <button className={`${buttonStyle} text-2xl`} type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload"}</button>
    </form>
  )
}