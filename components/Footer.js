import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import flipprr from "../public/flipprrdark.png";
import flipprrBlack from "../public/flipprrlight.png";
 
import { Button } from "@nextui-org/react";
import { AppStore } from "@/public/svg/AppStore";
import { LinkedIn } from "@/public/svg/LinkedIn";
import { PlayStore } from "@/public/svg/PlayStore";

export default function Footer() {
  const { theme, setTheme } = useTheme("light");
  return (
    <div className="container mx-auto pt-5">
      <div className="flex px-5 lg:flex-nowrap flex-wrap lg:justify-start justify-center">
        <div className="flex-none h-14">
          {theme === "light" ? (
            <Image src={flipprrBlack} alt="flipprr" />
          ) : (
            <Image src={flipprr} alt="flipprr" />
          )}
        </div>
        <div className="grow h-14 text-center">
          <p>Copyright © 2023 flipprr</p>
        </div>
        <div className="flex-none h-14">
          <div className="flex justify-center items-center">
            <Button isIconOnly aria-label="Like" className="p-2">
              <PlayStore />
            </Button>
            <Button isIconOnly aria-label="Like" className="p-2 mx-5">
              <AppStore />
            </Button>
            <Button isIconOnly aria-label="Like" className="p-2">
              <LinkedIn />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
