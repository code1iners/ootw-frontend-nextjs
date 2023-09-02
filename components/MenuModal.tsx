"use client";

import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { useModalStore } from "@/store";
import { Routes } from "@/constants/routes.constant";

const MenuModal = () => {
  const router = useRouter();
  const { isMenuModalVisible, closeMenuModal } = useModalStore();

  const onLinkClick = (href: string) => {
    closeMenuModal();

    router.push(href);
  };

  return createPortal(
    <AnimatePresence>
      {isMenuModalVisible && (
        <motion.article
          className="menu bg-blue-400 z-50 text-white flex flex-col justify-center "
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <nav className="w-full flex flex-col justify-center items-center space-y-3">
            <button onClick={() => onLinkClick(Routes.MAIN)}>Main</button>
            <button onClick={() => onLinkClick(Routes.PROFILES)}>
              Profile
            </button>
            <button onClick={() => onLinkClick(Routes.SETTINGS)}>
              Setting
            </button>
            <button onClick={() => onLinkClick(Routes.LOGOUT)}>Logout</button>
          </nav>
        </motion.article>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MenuModal;
