"use client"

import styles from "./dashboard.module.scss";
import { useRouter } from "next/navigation"
import DashboardMain from "./dashboardMain";
import PeFirms from "./PeFirms";
import RecentInvestments from "./RecentInvestments";
import AdvanceFilter from "./advanceFilter";

export default function Dashboard() {
    const router = useRouter();
    return (
        <>

            <div className={styles.dashboardSection}>
                <div className={styles.dashboardHeading}>
                    <h1>Dashboard</h1>
                    <p>Hello Robert , Welcome to Stone-Goff Partners</p>
                </div>

                <DashboardMain />
                <PeFirms />
                <RecentInvestments />
                <AdvanceFilter />
            </div>

        </>
    )
}