"use client";

import { Button } from "@jtwjs/ui";
import { cn } from "@jtwjs/utils";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useMobileNavbar } from "../hooks";

import { DOM_ID } from "@/constants/id";

interface MobileNavOpenerProps {
  className?: string;
}

export default function MobileNavOpener({ className }: MobileNavOpenerProps) {
  const { isShowMobileNav, handleToggleMobileNav } = useMobileNavbar();

  return (
    <Button
      className={cn("flex shrink-0", className)}
      label={isShowMobileNav ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
      aria-controls={DOM_ID.NAV_MENU}
      aria-expanded={isShowMobileNav}
      IconOnly={isShowMobileNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      onClick={handleToggleMobileNav}
    ></Button>
  );
}
