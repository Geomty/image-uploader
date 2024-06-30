"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";

export default function DownArrow() {
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

  return <ChevronDownIcon className={`md:block hidden md:absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 ${scroll ? "opacity-0" : "opacity-50"} fill-slate-200 transition-all duration-500 ease-in-out`} />
}