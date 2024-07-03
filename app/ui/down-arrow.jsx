"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.div animate={{ top: ["87%", "90%"] }} transition={{ type: "tween", duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} className={`md:block hidden md:absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${scroll ? "opacity-0" : "opacity-50"} transition duration-500 ease-in-out`}>
      <ChevronDownIcon className="w-12 fill-slate-200" />
    </motion.div>
  )
}