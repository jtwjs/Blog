"use client";

import { cn } from "@jtwjs/utils";

import { NavItem } from "./item";

import { DOM_ID } from "@/constants/id";
import { NAV_MENU_LIST } from "@/static/header";
import { useShowMobileNav } from "@/store";

export default function Navbar() {
  const { isShowMobileNav } = useShowMobileNav();

  return (
    <nav
      id={DOM_ID.NAV_MENU}
      className={cn(
        "absolute top-[calc(100%+1px)] left-0 w-full max-h-0 bg-white overflow-hidden transition-all ease-in-out duration-1000 lg:relative lg:max-h-max lg:bg-transparent",
        isShowMobileNav && "max-h-[calc(100vh-250px)]"
      )}
    >
      <ul
        className={cn(
          "flex flex-col px-8 py-4 items-center h-full border-b border-border lg:flex-row lg:border-0"
        )}
      >
        {NAV_MENU_LIST.map(({ label, path }) => (
          <NavItem key={path} label={label} path={path} />
        ))}
      </ul>
    </nav>
  );
}
