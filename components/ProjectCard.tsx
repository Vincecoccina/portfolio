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
    <Link href={link} target="_blank" className="w-[250px] h-[150px] lg:w-[450px] lg:h-[280px] rounded-md cursor-pointer relative flex-shrink-0 shadow-md filter brightness-110">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="flex items-center justify-center flip-card-front absolute inset-0 bg-cover bg-center text-white rounded-lg p-4"
      >
      </div>
    </Link>
  );
};

export default ProjectCard;
