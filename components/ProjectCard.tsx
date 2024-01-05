"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {Visibility} from '@mui/icons-material';

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[550px] h-[380px] rounded-md cursor-pointer relative flex-shrink-0 border shadow-md filter brightness-110"
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          style={{ backgroundImage: `url(${image})`, backfaceVisibility: "hidden" }}
          className="flex items-center justify-center flip-card-front absolute inset-0 bg-cover bg-center text-white rounded-lg p-4"
        >
         {/* <Visibility sx={{fontSize: "50px"}}/> */}
        </div>
        <div
          style={{ backgroundImage: `url(${image})`, backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="flip-card-back absolute inset-0 bg-cover bg-center text-white rounded-lg p-4"
        >
          {/* Contenu du verso */}
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50" />
          <div className="flex flex-col gap-20 py-3">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
