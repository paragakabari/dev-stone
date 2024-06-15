"use client"


import { useRouter } from "next/navigation"
import styles from "./firm-list.module.scss";
import FirmListTable from "./firmListTable/firmListTable";

export default function FirmList() {
    const router = useRouter();
    return (
        <>
            <div className={styles.firmListSection}>
                <div className={styles.firmListHeading}>
                    <h1>PE Firms</h1>
                    <div className={styles.sortBySection}>
                        <label>Sort by</label>

                        <select>
                            <option>Investment High to Low</option>
                            <option>Investment High to Low</option>
                            <option>Investment High to Low</option>
                            <option>Investment High to Low</option>
                        </select>
                    </div>
                </div>

                <FirmListTable />
            </div>

        </>
    )
}