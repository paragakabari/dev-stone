import React from 'react'
import styles from "./firmListTable.module.scss";
import Image from 'next/image';
import Pagination from '../pagination/page';
import { redirect, useRouter } from 'next/navigation';
const Logo = "/assets/images/logo1.png";
const StarIcon = "/assets/icons/star-icon.svg";
const TopBottomArrow = "/assets/icons/top-bottom-arrow.svg";
const UPRightArrow = "/assets/icons/up-right.svg";

const data = [
    { logo: "/assets/images/logo1.png", name: "HarbourVest Partners", founded: 1982, portfolio: 215, investments: "$88M", sector: "7+", focus: "Global" },
    { logo: "/assets/images/plogo2.png", name: "Onex Corporation", founded: 1984, portfolio: 156, investments: "$49B", sector: "10+", focus: "Europe, Asia" },
    { logo: "/assets/images/plogo3.png", name: "Kitikow Financial", founded: 1952, portfolio: 150, investments: "$46B", sector: "12+", focus: "North America" },
    { logo: "/assets/images/plogo4.png", name: "One Corporation", founded: 2005, portfolio: 203, investments: "$40B", sector: "7+", focus: "Europe, Asia" },
    { logo: "/assets/images/plogo5.png", name: "Northleaf", founded: 2009, portfolio: 155, investments: "$48B", sector: "10+", focus: "Latin America" },
    { logo: "/assets/images/plogo6.png", name: "Blackstone Group", founded: 1985, portfolio: 300, investments: "$231B", sector: "15+", focus: "Global" },
    { logo: "/assets/images/plogo7.png", name: "KKR & Co. Inc.", founded: 1976, portfolio: 200, investments: "$429B", sector: "12+", focus: "Global" },
    { logo: "/assets/images/plogo8.png", name: "Carlyle Group", founded: 1987, portfolio: 293, investments: "$376B", sector: "20+", focus: "Global" },
    { logo: "/assets/images/plogo9.png", name: "Apollo Global Management", founded: 1990, portfolio: 252, investments: "$279B", sector: "15+", focus: "Global" },
    { logo: "/assets/images/plogo10.png", name: "TPG Capital", founded: 1992, portfolio: 190, investments: "$127B", sector: "12+", focus: "Europe, Asia" },
    { logo: "/assets/images/plogo11.png", name: "Bain Capital", founded: 1984, portfolio: 234, investments: "$195B", sector: "12+", focus: "Global" },
    { logo: "/assets/images/plogo12.png", name: "Partners Group", founded: 1996, portfolio: 156, investments: "$135B", sector: "12+", focus: "Europe, Asia" },
    { logo: "/assets/images/plogo13.png", name: "Hellman & Friedman", founded: 1984, portfolio: 118, investments: "$79B", sector: "9+", focus: "North America, Europe" },
    { logo: "/assets/images/plogo14.png", name: "CVC Capital Partners", founded: 1981, portfolio: 203, investments: "$165B", sector: "15+", focus: "Global" },
    { logo: "/assets/images/plogo15.png", name: "Vista Equity Partners", founded: 2000, portfolio: 128, investments: "$92B", sector: "10+", focus: "North America" },
    { logo: "/assets/images/plogo16.png", name: "Silver Lake", founded: 1999, portfolio: 98, investments: "$75B", sector: "10+", focus: "Global" },
    { logo: "/assets/images/plogo17.png", name: "Permira", founded: 1985, portfolio: 100, investments: "$40B", sector: "10+", focus: "Global" },
    { logo: "/assets/images/plogo18.png", name: "EQT Partners", founded: 1994, portfolio: 300, investments: "$210B", sector: "20+", focus: "Global" },
    { logo: "/assets/images/plogo19.png", name: "Leonard Green & Partners", founded: 1994, portfolio: 80, investments: "$80B", sector: "12+", focus: "US" },
];

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
                            {data.map((firm, key) => (
                                <tr key={key}>
                                    <td>
                                        <div className={styles.logoAlignment}>
                                            <div className={styles.starIcon}>
                                                <Image unoptimized height={0} width={0} src={StarIcon} alt="StarIcon" />
                                            </div>
                                            <div className={styles.logo}>
                                                <Image unoptimized height={0} width={0} src={firm.logo} alt={firm.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{firm.name}</td>
                                    <td>{firm.founded}</td>
                                    <td>{firm.portfolio}</td>
                                    <td>{firm.investments}</td>
                                    <td>{firm.sector}</td>
                                    <td>{firm.focus}</td>
                                    <td>
                                        <div className={styles.upRightArrow} onClick={() => redirect.push("/firm")}>
                                            <Image unoptimized height={0} width={0} src={UPRightArrow} alt="UPRightArrow" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination />
            </div>

        </div>
    )
}
