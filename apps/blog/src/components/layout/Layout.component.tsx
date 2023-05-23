import type { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
