"use client"

import styles from "./firm-list.module.scss";
import FirmListTable from "./firmListTable/firmListTable";
import { useEffect, useState } from "react";
import { get } from "@/api/base";
import { errorCheckAPIResponse } from "@/utils/helpers";

export default function FirmList() {
    const [PEFirmData, setPEFirmData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        get(`/dashboard/api/companies`).then((res) => {            
            const response = res?.data?.results
            setPEFirmData(response)
            setIsLoading(false)
        }).catch((error) => {
            errorCheckAPIResponse(error)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <div className={styles.firmListSection}>
                <div className={styles.firmListHeading}>
                    <h1>PE Firms</h1>
                    <div className={styles.sortBySection}>
                        {/* <label>Sort by</label>

                        <select>
                            <option>Investment High to Low</option>
                            <option>Investment High to Low</option>
                            <option>Investment High to Low</option>
                            <option>Investment High to Low</option>
                        </select> */}
                    </div>
                </div>

                <FirmListTable PEFirmData={PEFirmData} isLoading={isLoading}/>


            </div>

        </>
    )
}