"use client";

import { type PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
}
