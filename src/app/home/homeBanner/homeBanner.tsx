import React from 'react'
import styles from "./homeBanner.module.scss";
import Image from 'next/image';
import AnimatedSection from '@/component/Animation/AnimatedSection';
const SidebarImg = "/assets/images/home-right-vector.png";
export default function HomeBanner() {
    return (
        <div className={styles.homeBannerSection}>
            <div className="container">
                <div className={styles.homeBannerAlignment}>
                    <div className={styles.heroBannerLeftSide} >
                        <AnimatedSection
                            animationType="fade-down"
                            duration={600}
                            delay={300}
                            once={""}
                        >
                            <h1>Empowering
                                Your Investment
                                Decisions</h1>
                        </AnimatedSection>
                        <AnimatedSection
                            animationType="fade-up"
                            duration={600}
                            delay={350}
                            once={""}
                        >
                            <p>with Comprehensive PE Firm Data </p>
                        </AnimatedSection>
                        <AnimatedSection
                            animationType="fade-up"
                            duration={600}
                            delay={400}
  once={""}
                        >
                            <button>Get Started</button>
                        </AnimatedSection>
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
