"use client";

import { deleteImage } from "@/app/lib/actions";
import { useState } from "react";

export default function DeleteButton({ buttonStyle, url }) {
  const [deleting, setDeleting] = useState(false);

  return (
    <form action={deleteImage}>
      <button
        name="url"
        value={url}
        type="submit"
        onClick={() => setTimeout(() => setDeleting(true), 1)}
        disabled={deleting}
        className={`${buttonStyle} md:mt-4 mt-2`}
      >{deleting ? "Deleting..." : "Delete"}</button>
    </form>
  )
}