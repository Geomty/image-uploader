import { Lato } from "next/font/google";
import "@/app/ui/global.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: {
    template: "%s | Image Uploader",
    default: "Image Uploader"
  },
  description: "A private, easy-to-use image uploader",
  author: "Geomty",
  keywords: ["image", "uploader"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-slate-800`}>{children}</body>
    </html>
  );
}