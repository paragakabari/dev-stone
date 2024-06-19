"use client"


import { useRouter } from "next/navigation"
import styles from "./firm.module.scss";
import FirmTop from "./firmTop/page";
import KeyMetrics from "./KeyMetrics/page";
import AboutFirm from "./aboutFirm/aboutFirm";
import FirmOtherOption from "./firmOtherOption";
import FirmPortfolio from "./firmPortfolio";
export default function Firm() {
    const router = useRouter();
    return (
        <div className={styles.firmSection}>
            <FirmTop />
            <KeyMetrics />
            <AboutFirm />
            <FirmOtherOption />
            <FirmPortfolio />
        </div>
    )
}