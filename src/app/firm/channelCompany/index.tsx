import React from 'react'
import styles from "./channelCompany.module.scss";
import Pagination from '@/app/firm-list/pagination/page';
import Image from 'next/image';
const Logo = "/assets/images/logo1.png";

export default function ChannelCompany() {
    return (
        <div className={styles.firmPortfolioSection}>
            <div className={styles.firmPortfolioBox}>
                <div className={styles.firmPortfolioBoxHeading}>
                    <h4>The Channel Company and its top active competitors (85,641)</h4>

                </div>

                <div className={styles.firmPortfolioBoxDetails}>
                    <div className={styles.firmPortfolioTableDetailsAlignment}>
                        <table cellPadding={0} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>Tracxn Score</th>
                                    <th>Location</th>
                                    <th>Year
                                    </th>
                                    <th>Company Stage</th>
                                    <th>Total Equity</th>
                                    <th>Short Description</th>
                                    <th>Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.logoAlignment}>
                                            <span>1 .</span>
                                            <div className={styles.logo}>
                                                <Image unoptimized height={0} width={0} src={Logo} alt="Logo" />
                                            </div>
                                            <div className={styles.logoNameAlignment}>
                                                <h6>HARB</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>Los Angeles</td>
                                    <td>1975</td>
                                    <td>Acquired</td>
                                    <td>$263M</td>
                                    <td>Provider of digital & content marketing and branding services</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    )
}
