import { getIronSession } from "iron-session";

export async function getSession(cookies) {
  return await getIronSession(cookies, {
    password: process.env.AUTH_SECRET,
    cookieName: "auth"
  });
}

export const imageTypes = [
  "image/x-xbitmap",
  "image/tiff",
  "image/jpeg",
  "image/vnd.microsoft.icon",
  "image/x-icon",
  "image/gif",
  "image/svg+xml",
  "image/webp",
  "image/png",
  "image/bmp",
  "image/vnd.mozilla.apng",
  "image/avif",
  "image/avif-sequence"
];

export const buttonStyle = "pt-1 pb-1 pl-3 pr-3 bg-orange-300 hover:bg-orange-400 transition rounded-full text-slate-800";

export function parseDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const hour = date.getHours() % 12 || 12;
  const minuteString = date.getMinutes().toString();
  const minute = (minuteString.length == 1 ? "0" : "") + minuteString;
  const secondString = date.getSeconds().toString();
  const second = (secondString.length == 1 ? "0" : "") + secondString;

  const ampm = date.getHours() < 12 ? "AM" : "PM";

  return `${month}/${day}/${year} ${hour}:${minute}:${second} ${ampm}`;
}