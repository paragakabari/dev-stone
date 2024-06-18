import React from 'react'
import styles from "./firmListTable.module.scss";
import Image from 'next/image';
import Pagination from '../pagination/page';
import { redirect, useRouter } from 'next/navigation';
const Logo = "/assets/images/logo1.png";
const StarIcon = "/assets/icons/star-icon.svg";
const TopBottomArrow = "/assets/icons/top-bottom-arrow.svg";
const UPRightArrow = "/assets/icons/up-right.svg";
export default function FirmListTable() {
    const redirect = useRouter();
    return (
        <div className={styles.firmListTableSection}>
            <div className={styles.firmListTableBox}>
                <div className={styles.firmListTableDetailsAlignment}>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>
                                    <div className={styles.filterALignment}>
                                        <label>
                                            PE Firm Name
                                        </label>
                                        <Image unoptimized height={0} width={0} src={TopBottomArrow} alt="TopBottomArrow" />
                                    </div>
                                </th>
                                <th>
                                    <div className={styles.filterALignment}>
                                        <label>
                                            Founded
                                        </label>
                                        <Image unoptimized height={0} width={0} src={TopBottomArrow} alt="TopBottomArrow" />
                                    </div>
                                </th>
                                <th>Portfolio</th>
                                <th>
                                    <div className={styles.filterALignment}>
                                        <label>
                                            Investments
                                        </label>
                                        <Image unoptimized height={0} width={0} src={TopBottomArrow} alt="TopBottomArrow" />
                                    </div> </th>
                                <th>Sector</th>
                                <th>Geographical Focus </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((key) => {
                                return (

                                    <tr key={key}>
                                        <td >
                                            <div className={styles.logoAlignment}>
                                                <div className={styles.starIcon}>

                                                    <Image unoptimized height={0} width={0} src={StarIcon} alt={StarIcon} />
                                                </div>
                                                <div className={styles.logo}>
                                                    <Image unoptimized height={0} width={0} src={Logo} alt='Logo' />
                                                </div>
                                            </div>
                                        </td>
                                        <td>HarbourVest Partners </td>
                                        <td>1982</td>
                                        <td>215</td>
                                        <td>$88M</td>
                                        <td>7+</td>
                                        <td>Global</td>
                                        <td >
                                            <div className={styles.upRightArrow} onClick={() => redirect.push("/firm")}>

                                                <Image unoptimized height={0} width={0} src={UPRightArrow} alt={UPRightArrow} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination />
            </div>

        </div>
    )
}
