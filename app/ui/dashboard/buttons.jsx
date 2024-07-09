"use client";

import { useState } from "react";
import { deleteImage } from "@/app/lib/actions";
import { AnimatePresence } from "framer-motion";
import BlockedModal from "@/app/ui/dashboard/modals/blocked-modal";
import { buttonStyle } from "@/app/lib/utils";

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

export function EditButton() {
  return <button className={`${buttonStyle} text-xl`}>Edit</button>
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