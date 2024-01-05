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
    <div className="absolute left-0 top-1/4 h-1/2 z-50 flex flex-col justify-between items-center bg-transparent px-4">
      {isRouting && <Transition/>}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 min-w-[20%]">
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
