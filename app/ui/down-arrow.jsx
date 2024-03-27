"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";

export default function DownArrow() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (top === true) {
        setTop(false);
      } else {
        setTop(true);
      }
    }, 1000)

    return () => clearTimeout(timeout);
  }, [top, setTop]);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [setScroll]);

  return <ChevronDownIcon className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 ${scroll ? "opacity-0" : "opacity-100"} fill-slate-200 top-${top ? "4/5" : "82"} transition-all duration-1000 ease-in-out`} />
}