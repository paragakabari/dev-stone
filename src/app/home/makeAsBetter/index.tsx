import React from 'react';
import styles from "./makeAsBetter.module.scss";
import Image from 'next/image';
const UserIcon = "/assets/icons/user-salary2.svg";
const ChartPieIcon = "/assets/icons/chart-pie.svg";
const FileIcon = "/assets/icons/file-invoice-dollar.svg";

export default function MakeAsBetter() {
    return (
        <div className={styles.makeAsBetterSection}>
            <div className="container">
                <div className={styles.makeAsBetterAlignment}>
                    <div className={styles.makeAsBetterHeader}>
                        <h2>What Makes Us <span> Better</span></h2>
                    </div>
                    <div className={styles.makeAsBetterDetails}>
                        <div className={styles.makeAsBetterDetailsGrid}>
                            <div className={styles.makeAsBetterDetailsGridItem}>
                                <div>
                                    <Image
                                        unoptimized
                                        height={0}
                                        width={0} src={UserIcon} alt='UserIcon' />
                                </div>
                                <h6>500+</h6>
                                <p>Number of PE Firms</p>
                                <span>There are thousands of private equity (PE) firms operating worldwide, with some of the largest and most well-known firms including Blackstone Group, KKR & Co., TowerNorth, Walker Sands and The Carlyle Group.</span>
                            </div>

                            <div className={styles.makeAsBetterDetailsGridItem}>
                                <div>
                                    <Image
                                        unoptimized
                                        height={0}
                                        width={0} src={ChartPieIcon} alt='ChartPieIcon' />
                                </div>
                                <h6>$22B+</h6>
                                <p>Total Investments</p>
                                <span>Total investments made by PE firms can vary greatly depending on the size and focus of the firm. Some firms specialize in small, early-stage investments while others focus on larger, more established companies. </span>
                            </div>

                            <div className={styles.makeAsBetterDetailsGridItem}>
                                <div>
                                    <Image
                                        unoptimized
                                        height={0}
                                        width={0} src={FileIcon} alt='FileIcon' />
                                </div>
                                <h6>3M+</h6>
                                <p>Recent Transactions</p>
                                <span>Recent transactions in the private equity world have included acquisitions, mergers, and investments in a wide range of industries. Some notable recent transactions include Blackstones acquisition.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
