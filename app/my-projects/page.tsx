"use client";
import React, { useState, useRef, useEffect } from "react";
import { Projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Page = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [cardWidth, setCardWidth] = useState(550);

  // Précisez le type de l'élément que listRef va référencer
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Cette fonction est maintenant exécutée côté client
    const calculateCardWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        return 400;
      } else {
        return 550;
      }
    };

    // Mettre à jour cardWidth
    setCardWidth(calculateCardWidth());

    // Ajouter un gestionnaire pour les changements de taille de fenêtre
    const handleResize = () => {
      setCardWidth(calculateCardWidth());
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (direction: string) => {
    if (listRef.current) {
      let newSlideNumber = slideNumber;
      if (direction === "left" && slideNumber > 0) {
        newSlideNumber = slideNumber - 1;
      } else if (direction === "right" && slideNumber < Projects.length - 1) {
        newSlideNumber = slideNumber + 1;
      }

      // Mise à jour de l'état slideNumber
      setSlideNumber(newSlideNumber);

      // Utiliser newSlideNumber pour calculer le déplacement
      const totalShift = newSlideNumber * cardWidth;
      listRef.current.style.transform = `translateX(-${totalShift}px)`;
    }
  };

  return (
    <main className="w-screen h-screen relative">
      <div
        className="w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] text-white font-semibold">
            Mes<span className="text-orange-500 font-light"> projets</span>
          </h1>
          <p className="text-gray-300 text-[15px] sm:text-[20px] md:text-[17px] font-semibold bg-[rgba(0,0,0,0.6)] py-1 px-5">
            Réalisés avec react, nodejs ou nextjs
          </p>
        </div>
        <div
          className="gap-2 mt-6 grid grid-cols-1 md:grid-cols-2"
        >
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
