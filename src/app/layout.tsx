import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Profile",
  description: "My Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex">
          <SideBar/>
          <div className=" bg-black flex-1 h-screen">
            {children}
            </div>
        </div>
      </body>
    </html>
  );
}
