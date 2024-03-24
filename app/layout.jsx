import { PT_Sans } from "next/font/google";
import "@/app/ui/global.css";

const ptSans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={ptSans.className}>{children}</body>
    </html>
  );
}