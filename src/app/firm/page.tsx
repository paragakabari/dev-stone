"use client"


import { useRouter } from "next/navigation"
import styles from "./firm.module.scss";
import FirmTop from "./firmTop/page";
import KeyMetrics from "./KeyMetrics/page";
import AboutFirm from "./aboutFirm/aboutFirm";
import FirmOtherOption from "./firmOtherOption";
import FirmPortfolio from "./firmPortfolio";
import Image from "next/image";
const LeftArrow = "/assets/icons/left-arrow.png";
export default function Firm() {
    const router = useRouter();
    return (
        <div className={styles.firmSection}>
            <div className={styles.breadCrumpAlignmet} onClick={() => router.push("/firm-list")}>
                <Image unoptimized height={0} width={0} src={LeftArrow} alt="LeftArrow" />
                <p> Pe Firm</p>
            </div>
            <FirmTop />
            <KeyMetrics />
            <AboutFirm />
            <FirmOtherOption />
            <FirmPortfolio />
        </div>
    )
}