import React from 'react'
import styles from "./loginSide.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Logo = "/assets/logo/logo.svg";
const VectorImg = "/assets/images/login-vectore.png";
export default function LoginSide() {
    const router = useRouter();
    return (
        <div className={styles.loginSideBannerSection}>
            <div className={styles.loginSideBannerDetails}>

                <div className={styles.logo} onClick={() => {
                    router.push(`/`);
                }}>
                    <Image height={0} width={0} unoptimized alt="11" src={Logo} />
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
                        <div className={styles.loginVectore}>

                            <Image height={0} width={0} unoptimized src={VectorImg} alt='img' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
