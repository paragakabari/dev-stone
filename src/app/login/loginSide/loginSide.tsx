import React from 'react'
import styles from "./loginSide.module.scss";
const Logo = "/assets/logo/logo.svg";
const VectorImg = "/assets/images/login-vectore.png";
export default function LoginSide() {
    return (
        <div className={styles.loginSideBannerSection}>
            <div className={styles.loginSideBannerDetails}>

                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.loginSideBannerBottom}>
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
