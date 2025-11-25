import Link from "next/link";
import Image from "next/image";

import HeroCtas from "./HeroCtas";

const Hero = () => {
  return (
    <div
      className="py-16 px-4 flex flex-col justify-center gap-12
        items-center pt-28 md:pt-32 md:flex-row-reverse md:py-28
        text-light-text"
    >
      <div
        className="flex flex-col gap-10 items-center justify-center
           "
      >
        <div
          className="flex flex-col gap-2 items-center justify-center
                    md:gap-4
                md:w-1/2"
        >
          <h1 className="text-2xl font-bold text-center uppercase">
            Simplify your financial journey with Trexpenser
          </h1>
          <p className="text-center">
            Track expenses, set savings goals, and stay on top of your budget with ease.
          </p>
        </div>
      </div>
      <HeroCtas />
      <div className="p-2 md:w-1/2">
        <Image
          width={150}
          height={150}
          src="/saving_img.svg"
          className="w-52 h-auto w-full"
          alt="Why you need Trexpenser"
        />
      </div>
    </div>
  );
};
export default Hero
