import React from 'react'
import styles from "./easyUsing.module.scss";
import Image from 'next/image';
const GirlImg = "/assets/images/using-girl-img.png";
export default function EasyUsing() {
    return (
        <div className={styles.easyUsingSection}>
            <div className="container">
                <div className={styles.easyUsingBox}>
                    <div className={styles.easyUsingLeftSide}>
                        <p>Built Your Portfolio</p>
                        <h2>Ease of Using the
                            <span> Platform </span> with
                            PE Aggregator</h2>
                        <div className={styles.buttonAlignment}>
                            <button>Get Started</button>
                        </div>
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
