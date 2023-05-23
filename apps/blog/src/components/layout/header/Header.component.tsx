"use client";

import { useDarkMode, useScrollDirection } from "@jtwjs/hooks";
import { DarkModeSwitch } from "@jtwjs/ui";
import { cn } from "@jtwjs/utils";
import Image from "next/image";

import { MobileNavOpener } from "./mobileNavOpener";
import { Navbar } from "./navbar";
import { SearchBar } from "./searchBar";

export default function Header() {
  const { direction } = useScrollDirection(20);
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <header
      data-direction={direction}
      className={cn(
        "sticky top-0 border-b border-border backdrop-blur transition-all duration-[400ms] z-header data-[direction=down]:translate-y-[-76px] data-[direction=down]:bg-white data-[direction=down]:border-none"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "grid grid-cols-[max-content_1fr] justify-between items-center gap-x-2 h-header lg:pt-5 lg:pb-5"
          )}
        >
          <div className={cn("relative w-16 h-9.5 lg:w-20 lg:h-12")}>
            <Image
              priority
              fill
              src="/images/logo.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="jtwjs blog"
            />
          </div>
          <div className={cn("flex justify-self-end items-center w-max")}>
            <Navbar />
            <SearchBar />
            <DarkModeSwitch
              className={cn("scale-50")}
              isDarkMode={isDarkMode}
              onToggle={toggle}
            />
            <MobileNavOpener className={cn("lg:hidden")} />
          </div>
        </div>
      </div>
    </header>
  );
}
