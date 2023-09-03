"use client";

import { clazz } from "@ce1pers/use-class";

import HamburgerMenu from "@/components/HamburgerMenu";
import MenuModal from "@/components/MenuModal";
import { useModalStore, useAuthStore } from "@/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants/routes.constant";
import Link from "next/link";

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
          <Link href={Routes.MAIN}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
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
