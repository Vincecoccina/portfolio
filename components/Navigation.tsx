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
    <div className="absolute bg-[rgba(0,0,0,0.5)] py-3 md:py-0 lg:left-0  bottom-0 lg:top-1/4 lg:h-1/2 z-50 flex lg:flex-col lg:items-center justify-between items-center md:bg-transparent px-4 w-full lg:w-auto">
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="flex items-center justify-center mb-4 lg:mb-16 min-w-[20%]"
        > 
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-white" : "text-gray-400"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
