"use client";

import Header from "@/component/header/Header";
import HomeHeader from "@/component/home-header/HomeHeader";
import Sidebar from "@/component/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import styles from "./LayoutCustom.module.scss";

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
      <div className={styles.layoutCustomSection}>
        <div className={styles.layoutCustomLeft}>
          {isSidebarRoute && <Sidebar />}
        </div>
        <div className={styles.layoutCustomRight}>

          {isHeaderOnlyRoute && <Header />}
          {isHeaderHomeRoute && <HomeHeader />}

          {children}
        </div>
      </div>
    </>
  );
};
