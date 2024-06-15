import React from 'react'
import styles from "./RecentInvestments.module.scss";
import Image from 'next/image';
const DropdownIcon = "/public/assets/icons/dropdown-icon.svg";
const Logo = "/assets/images/logo1.png";
const StarIcon = "/assets/icons/star-icon.svg";
export default function RecentInvestments() {
    return (
        <div className={styles.recentInvestmentSection}>
            <div className={styles.recentInvestmentBOx}>
                <div className={styles.recentInvestmentHeading}>
                    <h2>Recent Investments</h2>

                    <div className={styles.recentInvestmentDropdown}>
                        <p>June 2024</p>
                        <Image unoptimized height={0} width={0} src={DropdownIcon} alt={DropdownIcon} />
                    </div>
                </div>

                <div className={styles.recentInvestmentDetailsAlignment}>
                    <div className={styles.recentInvestmentDetailsTable}>
                        <table cellPadding={0} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Company Name</th>
                                    <th>Founded</th>
                                    <th>Sector</th>
                                    <th>Location</th>
                                    <th>Date & Time</th>
                                    <th>Amount</th>
                                    <th>Stage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((key) => {
                                    return (

                                        <tr>
                                            <td >
                                                <div className={styles.logoAlignment}>

                                                    <Image unoptimized height={0} width={0} src={StarIcon} alt={StarIcon} />
                                                    <div className={styles.logo}>
                                                        <Image unoptimized height={0} width={0} src={Logo} alt='Logo' />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>BigScoots</td>
                                            <td>2010</td>
                                            <td>Business Services</td>
                                            <td>Illinois</td>
                                            <td>28/05/2024 - 08:00 AM</td>
                                            <td>$34,295</td>
                                            <td>
                                                <div className={styles.stageDetails}>
                                                    <p>Acquired</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
