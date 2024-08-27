import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}
      <header className="">
        <h1 className="text-white fixed left-20 top-4">Logo</h1>
        <ul className="text-white flex gap-x-20 justify-center p-4">
          <button className="transition duration-300 hover:text-blue-200 rounded-full w-16 h-8">Home</button>   
          <button className="transition duration-300 hover:text-blue-200 rounded-full w-16 h-8">About</button>
          <button className="transition duration-300 hover:text-blue-200 rounded-full ">Privacy Policy</button>         
          <button className="md-flex item-end">github</button>
        </ul>
        
        <button className="flex text-white justify-end">Repo</button>
        
        </header>
        <div className="top-52 left-40 fixed container py-10 px-10 mx-0 min-w-full flex flex-col items-start">
  <h2 className="pt-6 text-3xl mb-3 text-gray-500">Convertion</h2>
  <p className="text-gray-500 pt-2">Start converting your file now</p>
  <button className="border border-gray-50 text-white hover:bg-blue-200 font-bold py-2 px-4 mt-3 rounded-full">Convert</button>
</div>
      
      </body>
    </html>
  );
}
