"use client"
import React from 'react'
import styles from "./firmTop.module.scss";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const Logo = "/assets/images/logo2.png";
const StarIcon = "/assets/icons/star-icon.svg";
const InvestmentIcon = "/assets/icons/investment-icon.svg";
const SectoreIcon = "/assets/icons/sectore-icon.svg";
const GeographicalIcon = "/assets/icons/Geographical-icon.svg";
export default function FirmTop(props) {
    const { firmData } = props;

    const router = useRouter();
    return (
        <div className={styles.firmTopSection}>
            <div className={styles.firmTopAlignment}>
                <div className={styles.firmTopLeft}>
                    <div className={styles.firmTopLogo}>
                        <Image unoptimized height={0} width={0} src={firmData?.logo_url} alt="Logo" />
                    </div>

                    <div className={styles.firmCompanyDetails}>
                        <div className={styles.companyTop}>
                            <h1>{firmData?.organization_name}</h1>
                            <Image unoptimized height={0} width={0} src={StarIcon} alt="StarIcon" />
                        </div>
                        <p>{firmData?.full_description}</p>
                    </div>
                </div>
                {/* <div className={styles.firmTopRight}>
                    <div className={styles.peFirmProfileBottomAlignment}>
                        <div className={styles.peFirmListDetails}>
                            <Image unoptimized height={0} width={0} src={InvestmentIcon} alt='InvestmentIcon' />
                            <p>Total Investments - <span>$88M+</span> </p>
                        </div>
                        <div className={styles.peFirmListDetails}>
                            <Image unoptimized height={0} width={0} src={SectoreIcon} alt='SectoreIcon' />
                            <p>Sectors - <span>7+</span> </p>
                        </div>
                        <div className={styles.peFirmListDetails}>
                            <Image unoptimized height={0} width={0} src={GeographicalIcon} alt='GeographicalIcon' />
                            <p>Geographical Focus - <span>Global</span> </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
