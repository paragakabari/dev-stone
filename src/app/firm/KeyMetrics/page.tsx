import React from 'react'
import styles from "./KeyMetrics.module.scss";
import Image from 'next/image';
const Icon1 = "/assets/icons/Companies-icon.svg"
const Icon2 = "/assets/icons/investments-icon.svg"
const Icon3 = "/assets/icons/Investment-size-icon.svg"
export default function KeyMetrics() {
    return (
        <div className={styles.keyMetricsSection}>
            <div className={styles.keyMetricsBox}>
                <h2>Key Metrics and Insights</h2>

                <div className={styles.keyMetricsDetailsAlignment}>
                    <div className={styles.keyMetricsDetailsGrid}>
                        <div className={styles.keyMetricsDetailsGridBox}>
                            <div className={styles.keyMetricschildGrid}>
                                <div className={styles.iconAllignment}>

                                    <Image unoptimized height={0} width={0} src={Icon1} alt="Icon1" />
                                </div>

                                <div className={styles.keyMetricsRightSide}>
                                    <p>No. of Companies</p>
                                    <h4>200+</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.keyMetricsDetailsGridBox}>
                            <div className={styles.keyMetricschildGrid}>
                                <div className={styles.iconAllignment}>

                                    <Image unoptimized height={0} width={0} src={Icon2} alt="Icon2" />
                                </div>
                                <div className={styles.keyMetricsRightSide}>
                                    <p>Total Investments Amount </p>
                                    <h4>$275B</h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.keyMetricsDetailsGridBox}>
                            <div className={styles.keyMetricschildGrid}>
                                <div className={styles.iconAllignment}>

                                    <Image unoptimized height={0} width={0} src={Icon3} alt="Icon3" />
                                </div>
                                <div className={styles.keyMetricsRightSide}>
                                    <p>Average Investment Size</p>
                                    <h4>$1.38B</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.keyMetricsBottomDetails}>
                    <div className={styles.keyMetricsChildDetails}>
                        <h6>Primary Sectors</h6>

                        <div className={styles.keyMetricsChilFlexAlignment}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                                return (

                                    <div className={styles.childBox}>
                                        <p>Aerospace & Defense</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.keyMetricsChildDetails}>
                        <h6>Geographical Focus</h6>

                        <div className={styles.keyMetricsChilFlexAlignment}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                                return (

                                    <div className={styles.childBox}>
                                        <p>Asia</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
