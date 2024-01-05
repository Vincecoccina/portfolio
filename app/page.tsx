import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center animate-zoom"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            My title
            <span className="text-orange-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            possimus. Laboriosam iste cupiditate consequuntur molestiae
            provident velit, consequatur commodi quibusdam, tenetur a accusamus
            suscipit? Amet pariatur debitis consequatur fuga recusandae?
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-projects"
              className="rounded-[10px] group relative bg-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Mes Projets
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[10px] group relative bg-trasparent border border-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contactez-moi
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-project"
          className="rounded-[10px] group bg-orange-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Mes Projets
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[10px] group relative bg-trasparent border border-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contactez-moi
        </Link>
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
