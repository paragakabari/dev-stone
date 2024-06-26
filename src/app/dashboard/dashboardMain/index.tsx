import React from "react";
import styles from "./dashboardMain.module.scss";
import Image from "next/image";
import dynamic from 'next/dynamic';
const BarChart = dynamic(() => import('../dashboardMain/Bar'), { ssr: false });
const DoughnutChart = dynamic(() => import('../dashboardMain/DoughnutChart '), { ssr: false });
const DropdownIcon = "/assets/icons/dropdown-icon.svg";
export default function DashboardMain() {
  return (
    <div className={styles.dashboardMainSection}>
      <div className={styles.dashboardMainGrid}>
        <div className={styles.dashboardMainGridItem}>
          <div className={styles.investmentBox}>
            <div className={styles.investmentBoxHeading}>
              <h2>Investments</h2>
              {/* <div className={styles.dropdownAlignment}>
                <p>June 2024</p>
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={DropdownIcon}
                  alt="DropdownIcon"
                />
              </div> */}
              <select>
                <option>June 2024</option>
                <option>June 2025</option>
                <option>June 2026</option>
                <option>June 2027</option>
              </select>
            </div>
            <div>
              <BarChart />
            </div>
          </div>
        </div>
        <div className={styles.dashboardMainGridItem}>
          <div className={styles.investmentBox}>
            <div className={styles.investmentBoxHeading}>
              <h2>Overview</h2>
            </div>
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
}
