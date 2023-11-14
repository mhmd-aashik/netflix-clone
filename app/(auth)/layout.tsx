import Image from "next/image";
import React from "react";
import backgroundImage from "../../public/login_background.jpg";
import logo from "../../public/netflix_logo.svg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        priority
        src={backgroundImage}
        alt="backgroung-image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        fill
      />
      <Image
        src={logo}
        alt=" logo"
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
};

export default layout;
