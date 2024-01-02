"use client";

import Image from "next/image";
import { AddressBook, CubeTransparent, Envelope, House, IdentificationCard, InstagramLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";



function SideBar() {

    return (
    <nav>
        <div className="gap-4 p-4 flex-col h-screen hidden sm:flex bg-gray-700">   
        <Image
          className="bg-white h-24 w-24 rounded-full mx-auto mt-5"
          src="/image/logo.png"
          alt=""
          width={350}
          height={350}
        />
          <h3 className=" justify-center text-center mb-10 text-md text-white">Ridhwan Ardiyansyah</h3>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
            <House size={26} weight="fill" />
            <Link href={"#Home"}>
              Home
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
            <IdentificationCard size={26} weight="fill" />
            <Link href={"#Home"}>
              About Me
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
            <ReadCvLogo size={26} weight="fill" />
            <Link href={"#Home"}>
              Resume
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
          <CubeTransparent size={26} weight="fill" />
            <Link href={"#Home"}>
              Works
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
          <AddressBook size={26} weight="fill" />
            <Link href={"#Home"}>
              Contact Me
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-20 ">
          <Link href="" className="flex  hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out" >
        <InstagramLogo size={26} />
        </Link>
        <Link href="" className="flex  hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
        <LinkedinLogo size={26} />
        </Link>
        <Link href="" className="flex  hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
        <Envelope size={28} />
        </Link>
        
          </div>
          
        </div>
        
      <ToggleButton />


        
    </nav>

    

    
  );
}

export default SideBar;
