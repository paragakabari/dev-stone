import React from 'react'
import styles from "./firmOtherOption.module.scss";
export default function FirmOtherOption() {
    return (
        <div className={styles.firmOtherOptionSection}>
            <div className={styles.firmOtherOptionGrid}>
                <div className={styles.firmOtherOptionGridItem}>
                    <div className={styles.firmOtherHeading}>
                        <h2>Portfolio Allocation</h2>
                    </div>
                </div>
                <div className={styles.firmOtherOptionGridItem}>
                    <div className={styles.firmOtherHeading}>
                        <h2>Portfolio Map</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
