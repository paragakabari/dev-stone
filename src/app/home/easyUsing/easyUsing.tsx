import React from 'react'
import styles from "./easyUsing.module.scss";
import Image from 'next/image';
import AnimatedSection from '@/component/Animation/AnimatedSection';
const GirlImg = "/assets/images/using-girl-img.png";
export default function EasyUsing() {
    return (
        <div className={styles.easyUsingSection}>
            <div className="container">
                <div className={styles.easyUsingBox}>
                    <div className={styles.easyUsingLeftSide}>
                        <AnimatedSection
                            animationType="fade-down"
                            duration={600}
                            delay={300}
                            once={""}
                        >
                            <p>Built Your Portfolio</p>
                        </AnimatedSection>
                        <AnimatedSection
                            animationType="fade-up"
                            duration={600}
                            delay={350}
                            once={""}
                        >
                            <h2>Ease of Using the
                                <span> Platform </span> with
                                PE Aggregator</h2>
                        </AnimatedSection>
                        <AnimatedSection
                            animationType="fade-up"
                            duration={600}
                            delay={400}
                            once={""}
                        >
                            <div className={styles.buttonAlignment}>
                                <button>Get Started</button>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className={styles.girlImgAlignment}>
                        <Image
                            unoptimized
                            height={0}
                            width={0} src={GirlImg} alt="GirlImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
