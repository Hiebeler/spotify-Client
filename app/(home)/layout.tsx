"use client";

import Sidebar from "@/components/sidebar/sidebar";
import useProfile from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: profile, error, isLoading } = useProfile();

  useEffect(() => {
    if (window.localStorage.getItem("access_token") == null) {
      router.push("/auth");
    } else if (error) {
      router.push("/auth");
    }
  }, [router, error, profile, isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="p-24">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      ) : profile ? (
        <div className="flex flex-row h-screen">
          <Sidebar />
          {children}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeLayout;
