import React from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const Page = () => {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div
          className="h-[60%] w-[50%] relative rounded-xl border border-white bg-[rgba(0,0,0,0.7)]"
        >
          <div className="flex items-center justify-center w-[100%] h-[100%] py-5 px-5">
            <ContactForm />
          </div>
        </div>
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
};

export default Page;
