"use client";

import { motion } from "framer-motion";

import UserGuard from "@/components/UserGuard";
import Link from "next/link";
import { Routes } from "@/constants/routes.constant";

const Closet = () => {
  const onDeleteItemClick = async () => {
    try {
      alert("삭제되었습니다.");
    } catch (err) {
      console.warn((err as Error).message);
      alert("삭제를 실패했습니다.");
    }
  };

  return (
    <UserGuard>
      <section className="core-padding page__container">
        <h1 className="text-3xl">옷장</h1>

        <ul>
          <motion.li className="font-medium">
            <div className="flex justify-between items-center">
              <p className="flex items-center gap-2">
                <span className="text-lg font-normal">얇은 반팔</span>
                <small className="font-light">(28&deg;C 이상)</small>
              </p>

              <div className="flex items-center gap-2">
                <Link href={{ pathname: Routes.CLOSET_EDIT, query: { id: 1 } }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <button onClick={() => onDeleteItemClick()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.li>
        </ul>
      </section>
    </UserGuard>
  );
};

export default Closet;
