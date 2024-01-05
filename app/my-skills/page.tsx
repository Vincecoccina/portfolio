"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Tooltip } from "@mui/material";

const Page = () => {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="flex flex-col gap-20 max-w-[80%] mx-auto text-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-white text-[50px]">
              Compétences{" "}
              <span className="text-orange-500 font-light">
                {" "}
                &{" "}
              </span>
              Technologies
            </h1>
            <p className="text-gray-300 text-[20px] bg-[rgba(0,0,0,0.6)] py-1 px-5">
              Applications web, trading algoritmique et Web 3.0
            </p>
          </div>
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[100%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Tooltip title={skill.name}>
                  <div className="flex items-center justify-center h-[100px] w-[100px] bg-black border rounded-[10px]">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="filter brightness-120"
                    />
                  </div>
                </Tooltip>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[80%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Tooltip title={skill.name}>
                  <div className="flex items-center justify-center h-[100px] w-[100px] bg-black border rounded-[10px]">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="filter brightness-120"
                    />
                  </div>
                </Tooltip>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-[50%] right-0 z-[10]"
      />
    </main>
  );
};

export default Page;
