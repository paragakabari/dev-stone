"use client";

import Header from "@/component/header/Header";
import HomeHeader from "@/component/home-header/HomeHeader";
import Sidebar from "@/component/sidebar/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import styles from "./LayoutCustom.module.scss";
import { useEffect, useState } from "react";
import { authenticate, unProtectedRoute } from "@/utils/auth.util";

export const LayoutCustom = ({ children }) => {
  const path = usePathname();
  const router = useRouter();
  const sidebarRoutes = ["/dashboard", '/firm', '/firm-list'];
  const headerRoutes = ["/dashboard", '/firm', '/firm-list'];
  const headerHomeRoutes = ["/"];
  const loginRoutes = ["/login", "/signup", '/magic', '/magic-link'];

  const isSidebarRoute = sidebarRoutes.includes(path);
  const isHeaderOnlyRoute = headerRoutes.includes(path);
  const isHeaderHomeRoute = headerHomeRoutes.includes(path);
  const login = loginRoutes.includes(path);

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false); // Open sidebar if screen width is 768px or less
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  useEffect(() => {
    if (authenticate()) {
      if ([...unProtectedRoute].includes(path)) {
        router.push(`/dashboard`)
      }
    } else if (!authenticate() && !unProtectedRoute.includes(path)) {
      router.push('/login')
    }
  }, [])
  return (
    <>
      {isSidebarRoute && (
        <div className={styles.layoutCustomSection}>
          <div
            className={`${isSidebarOpen ? styles.layoutCustomLeft : styles.layoutCustomLefts
              }`}
          >
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>
          <div
            className={`${isSidebarOpen
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
