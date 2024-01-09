import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-2 items-center">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <Link href="/">
          <h1 className="text-white text-[20px] md:text-[25px] font-semibold">
            Vincent <span className="text-orange-500 font-light"> Coccina </span>
          </h1>
        </Link>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social, i) => (
          <Link href={social.link} target="_blank" key={i}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={30}
              height={30}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
