import React from 'react'
import styles from "./whatLookingFor.module.scss";
import AnimatedSection from '@/component/Animation/AnimatedSection';
export default function WhatLookingFor() {
    return (
        <div className={styles.whatLookingForSection}>
            <AnimatedSection animationType="fade-down" duration={600} delay={400} once={""}>

                <label>What Are You Looking for?</label>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={600} delay={500} once={""}>

                <div className={styles.whatLookingForBox}>
                    <input type='text' placeholder='Search PE firms, portfolio companies, financial data...' />
                    <div className={styles.searchNowButton}>
                        <button>Search Now</button>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
