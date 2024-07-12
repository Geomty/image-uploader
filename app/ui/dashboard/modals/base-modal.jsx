import { motion } from "framer-motion";

export default function BaseModal({ h, order = 10 }) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className={`top-0 left-0 z-[${order}] fixed w-full h-full bg-black`}></motion.div>

      <motion.div initial={{ opacity: 0, top: "48%" }} animate={{ opacity: 1, top: "50%" }} exit={{ opacity: 0, top: "48%" }} transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className={`z-[${order+10}] fixed left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit p-8
      flex flex-col gap-8 items-center bg-slate-500 rounded-4xl`}>{h}</motion.div>
    </>
  )
}