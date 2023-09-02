"use client";

import UserGuard from "@/components/UserGuard";
import { Routes } from "@/constants/routes.constant";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Logout = () => {
  const { clearUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    clearUser();

    router.push(Routes.LOGIN);
  }, []);
  return (
    <UserGuard>
      <section className="">
        <h2>Logout</h2>
      </section>
    </UserGuard>
  );
};

export default Logout;
