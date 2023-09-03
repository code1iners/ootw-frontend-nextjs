"use client";

import { clazz } from "@ce1pers/use-class";

import HamburgerMenu from "@/components/HamburgerMenu";
import MenuModal from "@/components/MenuModal";
import { useModalStore, useAuthStore } from "@/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants/routes.constant";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const { user } = useAuthStore();
  const { isMenuModalVisible, openMenuModal, closeMenuModal } = useModalStore();

  const onMenuClick = () => {
    isMenuModalVisible ? closeMenuModal() : openMenuModal();
  };

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  return (
    <>
      <header
        className={clazz(
          "p-5 border-b flex justify-between items-center",
          isLoggedIn ? "" : "hidden"
        )}
      >
        <div>
          <Link className="flex items-center gap-2" href={Routes.MAIN}>
            <Image
              className="rounded-md"
              src="/favicons/android-chrome-192x192.png"
              width={30}
              height={30}
              alt="Logo icon"
            />
            <h1 className="text-xs font-light capitalize tracking-tighter">
              outfit of the weather
            </h1>
          </Link>
        </div>
        <div>
          <HamburgerMenu onClick={onMenuClick} />
        </div>
      </header>

      <MenuModal />
    </>
  );
};

export default Header;
