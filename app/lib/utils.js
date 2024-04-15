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