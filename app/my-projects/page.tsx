"use client";
import React, { useState, useRef } from "react";
import { Projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Page = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  // Précisez le type de l'élément que listRef va référencer
  const listRef = useRef<HTMLDivElement>(null);
  const cardWidth = 550;
  const handleClick = (direction: string) => {
    if (listRef.current) {
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
      } else if (direction === "right" && slideNumber < Projects.length - 1) {
        setSlideNumber(slideNumber + 1);
      }

      // Calcul du déplacement total basé sur la largeur de la carte et le numéro de la diapositive
      const totalShift = slideNumber * cardWidth;
      listRef.current.style.transform = `translateX(-${totalShift}px)`;
    }
  };

  return (
    <main className="w-screen h-screen relative">
      <div
        className="w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url(/bg_2.png)" }}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">Mes Projets</h1>
          <p className="text-gray-400 text-[20px]">
            Avec les technologies reactjs, nodejs ou nextjs
          </p>
        </div>
        <div className="relative w-[65%] mt-6 overflow-hidden">
          <div
            className="flex gap-5 transition-transform"
            ref={listRef}
            style={{ transition: "transform 0.5s ease" }}
          >
            {Projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                text={project.text}
                image={project.src}
              />
            ))}
          </div>
          <button
            className="absolute left-0 top-[50%] bottom-[50%] translate-y-[-50%] h-[50%] w-[70px] rounded-tr-[10px] rounded-br-[10px] bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.7)]"
            onClick={() => handleClick("left")}
          >
            <ArrowBackIos sx={{ fontSize: "40px" }} />
          </button>
          <button
            className="absolute right-0 top-[50%] bottom-[50%] translate-y-[-50%] h-[50%] w-[70px] rounded-tl-[10px] rounded-bl-[10px] bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.7)]"
            onClick={() => handleClick("right")}
          >
            <ArrowForwardIos sx={{ fontSize: "40px" }} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
