import React from 'react'
import styles from "./dashboardMain.module.scss";
import Image from 'next/image';
const DropdownIcon = "/assets/icons/dropdown-icon.svg"
export default function DashboardMain() {
    return (
        <div className={styles.dashboardMainSection}>
            <div className={styles.dashboardMainGrid}>
                <div className={styles.dashboardMainGridItem}>
                    <div className={styles.investmentBox}>
                        <div className={styles.investmentBoxHeading}>
                            <h2>Investments</h2>
                            <div className={styles.dropdownAlignment}>
                                <p>June 2024</p>
                                <Image unoptimized height={0} width={0} src={DropdownIcon} alt="DropdownIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboardMainGridItem}>
                    <div className={styles.investmentBox}>
                        <div className={styles.investmentBoxHeading}>
                            <h2>Overview</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
