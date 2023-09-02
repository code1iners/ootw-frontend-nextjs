"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store";
import { Routes } from "@/constants/routes.constant";

interface Props {
  children: React.ReactNode;
}

const UserGuard = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    console.log(user);
    if (!user) router.push(Routes.LOGIN);
  }, []);

  if (!user) return null;

  return <>{children}</>;
};

export default UserGuard;
