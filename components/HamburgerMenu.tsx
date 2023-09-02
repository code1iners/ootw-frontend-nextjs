"use client";

import { clazz } from "@ce1pers/use-class";
import { useModalStore } from "@/store";

interface Props {
  onClick?: () => void;
}

const HamburgerMenu = ({ onClick }: Props) => {
  const { isMenuModalVisible } = useModalStore();

  return (
    <div
      className="hamburger w-5 h-5 flex flex-col justify-around items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={clazz(
          "bar w-full h-[2px] bg-black transition origin-top-left",
          isMenuModalVisible ? "rotate-[42.5deg] translate-x-[3px] " : ""
        )}
      />
      <div
        className={clazz(
          "bar w-full h-[2px] bg-black transition",
          isMenuModalVisible ? "opacity-0" : ""
        )}
      />
      <div
        className={clazz(
          "bar w-full h-[2px] bg-black transition origin-bottom-left",
          isMenuModalVisible ? "-rotate-[42.5deg] translate-x-[3px] " : ""
        )}
      />
    </div>
  );
};

export default HamburgerMenu;
