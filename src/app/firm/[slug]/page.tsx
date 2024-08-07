"use client"


import { useRouter } from "next/navigation"
import styles from "../firm.module.scss";
import FirmTop from "../firmTop/page";
import KeyMetrics from "../KeyMetrics/page";
import AboutFirm from "../aboutFirm/aboutFirm";
import FirmOtherOption from "../firmOtherOption";
import FirmPortfolio from "../firmPortfolio";
import Image from "next/image";
import { useEffect, useState } from "react";
import { get } from "@/api/base";
import Loader from "@/component/loader";
import { errorCheckAPIResponse } from "@/utils/helpers";
import ChannelCompany from "../channelCompany";
const LeftArrow = "/assets/icons/left-arrow.png";
export default function Firm({ params }) {
    const router = useRouter();

    const [firmData, setfirmData] = useState({ company_info: '', investments: '' })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (params.slug) {
            setIsLoading(true)

            get(`/dashboard/api/company/${params.slug}`).then((res) => {
                const response = res?.data?.results;
                console.log('responseresponseresponseresponse',response);
                
                setfirmData(response)
                setIsLoading(false)
            }).catch((error) => {
                errorCheckAPIResponse(error)
                setIsLoading(false)
            })
        }
    }, [params.slug])
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
            <AboutFirm firmData={firmData} />
            <ChannelCompany />
            <FirmPortfolio investments={firmData?.investments} />
            {/* <FirmOtherOption /> */}
        </div>
    )
}