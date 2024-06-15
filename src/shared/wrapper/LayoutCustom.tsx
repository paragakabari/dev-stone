"use client";

import Header from "@/component/header/Header";
import HomeHeader from "@/component/home-header/HomeHeader";
import Sidebar from "@/component/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import styles from "./LayoutCustom.module.scss";
import { useState } from "react";

export const LayoutCustom = ({ children }) => {
  const path = usePathname();

  const sidebarRoutes = ["/dashboard",'/firm','/firm-list'];
  const headerRoutes = ["/dashboard",'/firm','/firm-list'];
  const headerHomeRoutes = ["/"];
  const loginRoutes = ["/login", "/signup"];

  const isSidebarRoute = sidebarRoutes.includes(path);
  const isHeaderOnlyRoute = headerRoutes.includes(path);
  const isHeaderHomeRoute = headerHomeRoutes.includes(path);
  const login = loginRoutes.includes(path);

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {isSidebarRoute && (
        <div className={styles.layoutCustomSection}>
          <div
            className={`${
              isSidebarOpen ? styles.layoutCustomLeft : styles.layoutCustomLefts
            }`}
          >
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>
          <div
            className={`${
              isSidebarOpen
                ? styles.layoutCustomRight
                : styles.layoutCustomRights
            }`}
          >
            <Header onToggleSidebar={toggleSidebar} />

            {children}
          </div>
        </div>
      )}
      {isHeaderHomeRoute && (
        <>
          {isHeaderHomeRoute && <HomeHeader />}

          {children}
        </>
      )}
      {login && <>{children}</>}
    </>
  );
};
