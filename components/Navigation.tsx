"use client";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [prevPath, path]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="absolute left-0 top-1/4 h-1/2 z-50 flex flex-col justify-between items-center bg-black border-t border-r border-b border-white rounded-tr-[20px] rounded-br-[60px] px-4 py-7">
      {isRouting && <Transition/>}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-orange-500" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
