import React from 'react'
import styles from "./signupSide.module.scss";
const Logo = "/assets/logo/logo.svg";
const VectorImg = "/assets/images/signup-vectore.png";
export default function SignUpSide() {
    return (
        <div className={styles.signupSidebarBannerSection}>
            <div className={styles.signupSidebarBannerDetails}>

                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.signupSideBannerBottom}>
                    <div className={styles.contentAlignment}>
                        <h2>Stone-Goff
                            Partners Data
                            Dashboard</h2>
                        <p>Explore Personalized PE Firm Data in
                            your Dashboard </p>
                    </div>

                    <div className={styles.loginVectoreImg}>
                        <img src={VectorImg} alt='VectorImg' />
                    </div>
                </div>
            </div>


        </div>
    )
}
