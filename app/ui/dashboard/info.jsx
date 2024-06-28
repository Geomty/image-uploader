"use client";

import { parseDate } from "@/app/lib/utils";
import bytes from "bytes";

export default function Info({ b }) {
  return <td className="text-2xl text-slate-200 break-words text-center md:max-w-[30vw] max-w-full md:mt-0 md:mb-0 mt-4 mb-4">Name: {b.pathname}<br />Date: {parseDate(b.uploadedAt)}<br />Size: {bytes.format(b.size, { decimalPlaces: 1, unitSeparator: " " })}</td>
}