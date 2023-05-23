import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const mobileNavToggle = atom<boolean>({
  key: "mobileNavAtom",
  default: false,
});

export default function useShowMobileNav() {
  const [isShowMobileNav, setIsShowMobileNav] = useRecoilState(mobileNavToggle);

  const handleToggleMobileNav = useCallback(() => {
    setIsShowMobileNav((prev: boolean) => !prev);
  }, [setIsShowMobileNav]);

  const handleOpenMobileNav = useCallback(() => {
    setIsShowMobileNav(true);
  }, [setIsShowMobileNav]);

  const handleCloseMobileNav = useCallback(() => {
    setIsShowMobileNav(false);
  }, [setIsShowMobileNav]);

  return {
    isShowMobileNav,
    handleToggleMobileNav,
    handleOpenMobileNav,
    handleCloseMobileNav,
  };
}
