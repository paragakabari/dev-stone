import React from 'react'
import styles from "./homeBanner.module.scss";
import Image from 'next/image';
const SidebarImg = "/assets/images/home-right-vector.png";
export default function HomeBanner() {
    return (
        <div className={styles.homeBannerSection}>
            <div className="container">
                <div className={styles.homeBannerAlignment}>
                    <div className={styles.heroBannerLeftSide}>
                        <h1>Empowering
                            Your Investment
                            Decisions</h1>
                        <p>with Comprehensive PE Firm Data </p>
                        <button>Get Started</button>
                    </div>
                    <div>
                        <Image
                            unoptimized
                            height={0}
                            width={0} src={SidebarImg} alt="SidebarImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
