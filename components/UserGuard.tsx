"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store";
import { Routes } from "@/constants/routes.constant";

interface Props {
  children: React.ReactNode;
}

const UserGuard = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) router.push(Routes.LOGIN);
    setIsLoggedIn(!!user);
  }, []);

  if (!isLoggedIn) return null;

  return <>{children}</>;
};

export default UserGuard;
