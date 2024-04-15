"use client";

import { useState } from "react";

export default function CopyButton({ buttonStyle, url }) {
  const [check, setCheck] = useState(false);

  return (
    <button onClick={() => {
      navigator.clipboard.writeText(url);
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
      }, 3000);
    }} className={`${buttonStyle} w-28`} disabled={check}>{check ? "✓" : "Copy URL"}</button>
  )
}