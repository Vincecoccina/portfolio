import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Transformez vos idées en
            <span className="text-orange-500 font-light">
              {" "}
              réalité numérique
            </span>
          </h1>
          <p className="text-gray-300 text-[15px] font-semibold">
            Spécialisé dans la création de solutions digitales, je vous
            accompagne dans la concrétisation de vos projets les plus audacieux.
            Qu'il s'agisse du développement d'applications web innovantes ou
            d'applications décentralisées sur la blockchain, je mets mon
            expertise et mon savoir-faire au service de votre réussite.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-projects"
              className="rounded-[5px] group relative bg-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Mes Projets
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[5px] group relative bg-trasparent border border-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-[50px] z-[15]">
        <Image src="/moi.png" alt="cliff" width={600} height={600} />
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
}
