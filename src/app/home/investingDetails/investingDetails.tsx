import React from 'react'
import styles from "./investingDetails.module.scss";
import Image from 'next/image';
const InvestChartImg = "/assets/images/invest-chart-img.png";
export default function InvestingDetails() {
    return (
        <div className={styles.investingDetailsSection}>
            <div className="container">
                <div className={styles.investingDetailsBox}>
                    <div className={styles.investingDetailsGrid}>
                        <div className={styles.chartImg}>

                            <Image
                                unoptimized
                                height={0}
                                width={0} src={InvestChartImg} alt="InvestChartImg" />
                        </div>

                        <div className={styles.investingDetailsRightSide}>
                            <h2>Investing in <span>Tech-focused</span>
                                Service Businesses With 
                                <span>PE Aggregator</span></h2>

                            <p>Our company specializes in investing in technology-driven service businesses that offer innovative solutions and services. With our PE Aggregator platform, we identify and support businesses that are at the forefront of leveraging technology to drive growth and deliver exceptional results. </p>
                            <p>
                                Through strategic investments and partnerships, we help these companies unlock their full potential and achieve sustainable success in todays rapidly evolving digital landscape.</p>

                            <div className={styles.getStartedButton}>
                                <button>Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
