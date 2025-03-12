"use client";

import { useRef, useState } from "react";
import { deleteImage } from "@/app/lib/actions";
import { AnimatePresence } from "framer-motion";
import UploadModal from "@/app/ui/dashboard/modals/upload-modal";
import BlockedModal from "@/app/ui/dashboard/modals/blocked-modal";
import ErrorModal from "@/app/ui/dashboard/modals/error-modal";
import { buttonStyle } from "@/app/lib/utils";

export function UploadButton({ session }) {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [dnd, setDnd] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <AnimatePresence>
        {blocked && <BlockedModal setBlocked={setBlocked} />}
        {file && <UploadModal file={file} setFile={setFile} fileRef={fileRef} setError={setError} />}
      </AnimatePresence>
      <AnimatePresence>
        {error && <ErrorModal setError={setError} setThing={setFile} />}
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
        } else {
          setBlocked(true);
        }
      }} className="hidden" />
    </>
  )
}

export function CopyButton({ url }) {
  const [check, setCheck] = useState(false);

  return (
    <button onClick={() => {
      navigator.clipboard.writeText(url);
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
      }, 3000);
    }} className={`${buttonStyle} text-xl w-28`} disabled={check}>{check ? "✓" : "Copy URL"}</button>
  )
}

export function EditButton({ session, f }) {
  const [file, setFile] = useState(null);
  const [blocked, setBlocked] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <AnimatePresence>
        {blocked && <BlockedModal setBlocked={setBlocked} />}
        {file && <UploadModal file={file} setFile={setFile} setError={setError} editing={true} url={f.url} />}
      </AnimatePresence>
      <AnimatePresence>
        {error && <ErrorModal setError={setError} setThing={setFile} />}
      </AnimatePresence>

      <button
        onClick={async () => {
          if (session.write) {
            setFile(new File([await (await fetch(f.url)).blob()], f.pathname, { lastModified: f.uploadedAt }));
          } else {
            setBlocked(true);
          }
        }}
        className={`${buttonStyle} text-xl`}
      >Edit</button>
    </>
  )
}

export function DeleteButton({ session, url }) {
  const [deleting, setDeleting] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <>
      <AnimatePresence>{blocked && <BlockedModal setBlocked={setBlocked} />}</AnimatePresence>

      <form action={session.write ? deleteImage : ""}>
        <button
          name="url"
          value={url}
          type={session.write ? "submit" : ""}
          onClick={event => {
            if (session.write) {
              setTimeout(() => setDeleting(true), 1)
            } else {
              event.preventDefault();
              setBlocked(true);
            }
          }}
          disabled={deleting}
          className={`${buttonStyle} text-xl`}
        >{deleting ? "Deleting..." : "Delete"}</button>
      </form>
    </>
  )
}