import React from 'react'
import styles from "./signupSide.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Logo = "/assets/logo/logo.svg";
const VectorImg = "/assets/images/signup-vectore.png";
export default function SignUpSide() {
    const router = useRouter();
    return (
        <div className={styles.signupSidebarBannerSection}>
            <div className={styles.signupSidebarBannerDetails}>

                <div className={styles.logo}  onClick={() => {
                    router.push(`/`);
                }}>
                    <Image unoptimized height={0} width={0} src={Logo} alt="Logo" />
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
                        <div className={styles.signupVectore}>

                            <Image unoptimized height={0} width={0} src={VectorImg} alt='VectorImg' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
