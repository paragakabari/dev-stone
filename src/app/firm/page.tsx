"use client"


import { useRouter } from "next/navigation"
import styles from "./firm.module.scss";
import FirmTop from "./firmTop/page";
import KeyMetrics from "./KeyMetrics/page";
export default function Firm() {
    const router = useRouter();
    return (
        <div className={styles.firmSection}>

            <FirmTop />
            <KeyMetrics />

        </div>
    )
}