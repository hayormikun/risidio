"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const SingleWallet = () => {
  const router = useRouter();
  const { setSignedIn } = useContext(AuthContext);
  return (
    <div onClick={() => {
      setSignedIn(true)
      router.back();
    }} className="bg-[#fafafa] h-[10.88em] w-[11.94em] hover:cursor-pointer"></div>
  );
};
