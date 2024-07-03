"use client"


import { useRouter } from "next/navigation"
import styles from "./firm.module.scss";
import FirmTop from "./firmTop/page";
import KeyMetrics from "./KeyMetrics/page";
import AboutFirm from "./aboutFirm/aboutFirm";
import FirmOtherOption from "./firmOtherOption";
import FirmPortfolio from "./firmPortfolio";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MainContent } from "@/utils/context";
import { get } from "@/api/base";
import Loader from "@/component/loader";
import { errorCheckAPIResponse } from "@/utils/helpers";
const LeftArrow = "/assets/icons/left-arrow.png";
export default function Firm() {
    
    const router = useRouter();
    const { companyName } = useContext(MainContent);
    useEffect(() => {
        if (companyName) {

        }

    }, [companyName])

    const [firmData, setfirmData] = useState({ company_info: '', investments: '' })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (companyName) {
            setIsLoading(true)

            get(`/dashboard/api/company/${companyName}`).then((res) => {
                const response = res?.data?.results;
                setfirmData(response)
                setIsLoading(false)
            }).catch((error) => {
                errorCheckAPIResponse(error)
                setIsLoading(false)
            })
        }
    }, [companyName])
    return (
        <div className={styles.firmSection}>
            {isLoading && (
                <Loader />
            )}
            <div className={styles.breadCrumpAlignmet} onClick={() => router.push("/firm-list")}>
                <Image unoptimized height={0} width={0} src={LeftArrow} alt="LeftArrow" />
                <p> Pe Firm</p>
            </div>
            <FirmTop firmData={firmData?.company_info} />
            <KeyMetrics firmData={firmData?.company_info} />
            <AboutFirm firmData={firmData?.company_info} />
            <FirmOtherOption />
            <FirmPortfolio investments={firmData?.investments} />
        </div>
    )
}