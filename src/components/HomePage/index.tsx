"use client";

import Link from "next/link";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

function HomePage() {
  const [message] = useState([
    "Universitas","Tarumanagara"
  ]);

  return (
    <div className="flex flex-col justify-center p-4 items-center max-h-screen m-auto text-white ">
      <div className="bg-white rounded-full shadow-blue-900 shadow-xl">
      <Image src="/image/logo.png" alt="" height={200} width={200} />
      </div>
      <div className="flex flex-col pt-4 gap-6">
        <h3 className="text-2xl font-bold">Hello, I am </h3>
        <h3 className="text-5xl font-bold">Ridhwan Ardiyansyah</h3>
        <h1 className="font-bold">I am Student {''}
        <Typewriter words={message} loop={false} cursor />
        </h1>
        <h3 className="text-lg">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </h3>
        <Link href={''} className="bg-gray-700/50 rounded-lg px-1 py-4 text-center justify-center h-16 w-32 shadow-lg shadow-white hover:shadow-blue-600 hover:bg-black">
            Download CV
        </Link>
      </div>
     
    </div>
  );
}

export default HomePage;
