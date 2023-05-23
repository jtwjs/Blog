"use client";

import { Button, Search } from "@jtwjs/ui";
import { cn } from "@jtwjs/utils";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <>
      <Search
        id="post"
        className={cn("hidden md:flex lg:w-[360px]")}
        label="post search"
        placeholder="Search"
        value=""
      />
      <Button
        variant="ghost"
        className={cn("md:hidden")}
        label="검색창 열기"
        IconOnly={<AiOutlineSearch className={cn("w-4 h-4 fill-tertiary")} />}
      />
    </>
  );
}
