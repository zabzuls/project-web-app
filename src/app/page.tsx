"use client"
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == "/") {
      redirect("/login");
    }
  }, [pathname]);

  return <div></div>;
}
