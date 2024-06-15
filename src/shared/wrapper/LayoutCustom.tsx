"use client";

import Header from "@/component/header/Header";
import HomeHeader from "@/component/home-header/HomeHeader";
import Sidebar from "@/component/sidebar/Sidebar";
import { usePathname } from "next/navigation";

export const LayoutCustom = ({ children }) => {
  const path = usePathname();
  console.log("path", path);

  const sidebarRoutes = ["/dashboard"];
  const headerRoutes = ["/dashboard"];
  const headerHomeRoutes = ["/"];

  const isSidebarRoute = sidebarRoutes.includes(path);
  const isHeaderOnlyRoute = headerRoutes.includes(path);
  const isHeaderHomeRoute = headerHomeRoutes.includes(path);

  return (
    <>
      {isSidebarRoute && <Sidebar />}
      {isHeaderOnlyRoute && <Header />}
      {isHeaderHomeRoute && <HomeHeader />}

      {children}
    </>
  );
};
