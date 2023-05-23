"use client";

import { cn } from "@jtwjs/utils";
import { motion } from "framer-motion";

import { NavItem } from "./item";

import { DOM_ID } from "@/constants/id";
import { useBreakPoint } from "@/hooks";
import { NAV_MENU_LIST } from "@/static/header";
import { useShowMobileNav } from "@/store";

export default function Navbar() {
  const { isShowMobileNav } = useShowMobileNav();
  const isDesktop = useBreakPoint("lg");

  const variants = isDesktop
    ? {
        active: {
          height: "max-content",
        },
        inActive: {
          height: "max-content",
        },
      }
    : {
        active: {
          height: "max-content",
        },
        inActive: {
          height: 0,
        },
      };

  return (
    <motion.nav
      id={DOM_ID.NAV_MENU}
      className={cn(
        "absolute top-[calc(100%+1px)] left-0 w-full bg-white overflow-hidden lg:relative lg:h-full lg:bg-transparent"
      )}
      animate={isShowMobileNav ? "active" : "inActive"}
      transition={{ duration: 0.5 }}
      variants={variants}
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
    </motion.nav>
  );
}
