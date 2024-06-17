import React from 'react'
import styles from "./firmPortfolio.module.scss";
import Image from 'next/image';
import Pagination from '@/app/firm-list/pagination/page';
const UPRightArrow = "/assets/icons/up-right.svg";
const TopBottomArrow = "/assets/icons/top-bottom-arrow.svg";
const Logo = "/assets/images/logo1.png";
const StarIcon = "/assets/icons/star-icon.svg";
export default function FirmPortfolio() {
    return (
        <div className={styles.firmPortfolioSection}>
            <div className={styles.firmPortfolioBox}>
                <div className={styles.firmPortfolioBoxHeading}>
                    <h4>Portfolio (5)</h4>
                    <select>
                        <option>June 2024</option>
                        <option>June 2023</option>
                        <option>June 2022</option>
                        <option>June 2021</option>
                        <option>June 2020</option>
                    </select>
                </div>

                <div className={styles.firmPortfolioBoxDetails}>
                    <div className={styles.firmPortfolioTableDetailsAlignment}>
                        <table cellPadding={0} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>
                                        <div className={styles.filterALignment}>
                                            <label>
                                                Company Name
                                            </label>
                                            <Image unoptimized height={0} width={0} src={TopBottomArrow} alt="TopBottomArrow" />
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.filterALignment}>
                                            <label>
                                                Founded
                                            </label>
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.filterALignment}>
                                            <label>
                                                Sector
                                            </label>
                                            <Image unoptimized height={0} width={0} src={TopBottomArrow} alt="TopBottomArrow" />
                                        </div>
                                    </th>
                                    <th>
                                        <div className={styles.filterALignment}>
                                            <label>
                                                Location
                                            </label>
                                        </div>
                                    </th>
                                    <th>First Investment</th>
                                    <th>Stage </th>
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
                                            <td>BigScoots</td>
                                            <td>2010</td>
                                            <td>Business Services</td>
                                            <td>Illinois</td>
                                            <td>Series B (2023)</td>
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

                <Pagination />
            </div>
        </div>
    )
}
