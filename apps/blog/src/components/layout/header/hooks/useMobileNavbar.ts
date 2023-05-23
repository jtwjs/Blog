import { useFixedScroll } from "@jtwjs/hooks";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useShowMobileNav } from "@/store";

interface UseMobileNavbar {
  isShowMobileNav: boolean;
  handleToggleMobileNav: () => void;
}

export default function useMobileNavbar(): UseMobileNavbar {
  const pathname = usePathname();

  const { isShowMobileNav, handleCloseMobileNav, handleToggleMobileNav } =
    useShowMobileNav();

  useFixedScroll(isShowMobileNav);

  useEffect(() => {
    handleCloseMobileNav();
  }, [pathname, handleCloseMobileNav]);

  return { isShowMobileNav, handleToggleMobileNav };
}
