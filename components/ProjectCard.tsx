"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  return (
    <Link href={link} target="_blank" className="w-[250px] h-[250px] md:w-[450px] md:h-[280px] rounded-md cursor-pointer relative flex-shrink-0 shadow-md filter brightness-110">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="flex items-center justify-center flip-card-front absolute inset-0 bg-cover bg-center text-white rounded-lg p-4"
      >
      </div>
      <div
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        className="flip-card-back absolute inset-0 bg-black bg-center text-white rounded-lg p-4"
      >
        {/* Contenu du verso */}
        <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50" />
        <div className="flex flex-col gap-20 py-3">
          <h1 className="text-white text-2xl font-semibold">{title}</h1>
          <p className="text-gray-200 text-[20px]">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
