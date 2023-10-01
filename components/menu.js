import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu
} from "@nextui-org/react";
 import { Switch } from "@nextui-org/react";
 import { MoonIcon } from "@/public/svg/MoonIcon";
 import { SunIcon } from "@/public/svg/SunIcon";
import Image from "next/image";
import flipprr from "@/public/flipprrdark.png";
import flipprrBlack from "@/public/flipprrlight.png";
import { useRouter } from "next/router";
 

export default function Menu() {
    const { asPath } = useRouter();
    const { theme, setTheme } = useTheme("light");
    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
      
  
    const menuItems = [
      {name:"Features", link:"/#features"},
      {name:"How it works", link:"/#howItWorks"},
      {name:"Contact", link:"/#contact"},
       
    ];

    return (
      <div className="fixed pb-5 z-50 w-full">
        <Navbar position="fixed" maxWidth="full">
          <NavbarBrand>
            <div className="flex-none ">
              {theme === "light" ? (
                <Image src={flipprrBlack} alt="flipprr" />
              ) : (
                <Image src={flipprr} alt="flipprr" />
              )}
            </div>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="/#features" color="foreground">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem className="px-5">
              <Link href="/#howItWorks" color="foreground" aria-current="page">
                How it works
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/#contact">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>
          <NavbarContent justify="end">
            <Button
              isIconOnly
              color="warning"
              aria-label="theme"
              onClick={handleThemeChange}
            >
              {theme == "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </NavbarContent>
          <NavbarMenu className="mt-5">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color="foreground"
                  href={item.link}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    );
}
