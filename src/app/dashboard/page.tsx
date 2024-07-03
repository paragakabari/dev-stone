"use client"

import { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import { useRouter } from "next/navigation"
import DashboardMain from "./dashboardMain";
import PeFirms from "./PeFirms";
import RecentInvestments from "./RecentInvestments";
import AdvanceFilter from "./advanceFilter";
import { getUserInfo } from "@/utils/auth.util";

export default function Dashboard() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({ user_info: { first_name: '', last_name: '' } })
    useEffect(() => {
        if (typeof window !== 'undefined') {
          setUserInfo(getUserInfo())
        }
      }, [router])
    
    return (
        <>
        
            <div className={styles.dashboardSection}>
                <div className={styles.dashboardHeading}>
                    <h1>Dashboard</h1>
                    <p>Hello {userInfo?.user_info?.first_name}, Welcome to Stone-Goff Partners</p>
                </div>

                <DashboardMain />
                <PeFirms />
                <RecentInvestments />
                {/* <AdvanceFilter /> */}
            </div>

        </>
    )
}