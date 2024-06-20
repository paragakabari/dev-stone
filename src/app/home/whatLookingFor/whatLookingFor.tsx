import React from 'react'
import styles from "./whatLookingFor.module.scss";
export default function WhatLookingFor() {
    return (
        <div className={styles.whatLookingForSection}>
            <label>What Are You Looking for?</label>
            <div className={styles.whatLookingForBox}>
                <input type='text' placeholder='Search PE firms, portfolio companies, financial data...' />
                <div className={styles.searchNowButton}>
                    <button>Search Now</button>
                </div>
            </div>
        </div>
    )
}
