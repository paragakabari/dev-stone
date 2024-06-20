import React from 'react'
import styles from "./RecentInvestments.module.scss";
import Image from 'next/image';
const DropdownIcon = "/public/assets/icons/dropdown-icon.svg";
const StarIcon = "/assets/icons/star-icon.svg";
const investment = [
    {
        "logo": "/assets/images/rlogo1.png",
        "companyName": "BigGeodata",
        "founded": 2010,
        "sector": "Business Services",
        "location": "Illinois",
        "dateTime": "31/05/2024 - 08:00 AM",
        "amount": "$24,295",
        "stage": "ACQUIRED"
    },
    {
        "logo": "/assets/images/rlogo2.png",
        "companyName": "JSI",
        "founded": 1962,
        "sector": "Other",
        "location": "Maryland",
        "dateTime": "30/05/2024 - 02:30 PM",
        "amount": "$82,000",
        "stage": "ACQUIRED"
    },
    {
        "logo": "/assets/images/rlogo3.png",
        "companyName": "Centeline Communications",
        "founded": 2006,
        "sector": "Telecom",
        "location": "Massachusetts",
        "dateTime": "31/05/2024 - 10:30 AM",
        "amount": "$48,400",
        "stage": "LATE STAGE"
    },
    {
        "logo": "/assets/images/rlogo4.png",
        "companyName": "Walker Sands",
        "founded": 2001,
        "sector": "Business Services",
        "location": "Illinois",
        "dateTime": "12/04/2024 - 03:00 PM",
        "amount": "$33,333",
        "stage": "LATE STAGE"
    },
    {
        "logo": "/assets/images/rlogo5.png",
        "companyName": "Thymes",
        "founded": 1982,
        "sector": "Consumer Goods",
        "location": "Minnesota",
        "dateTime": "31/03/2024 - 03:00 PM",
        "amount": "$46,955",
        "stage": "SELL"
    }
]

export default function RecentInvestments() {
    return (
        <div className={styles.recentInvestmentSection}>
            <div className={styles.recentInvestmentBOx}>
                <div className={styles.recentInvestmentHeading}>
                    <h2>Recent Investments</h2>

                    {/* <div className={styles.recentInvestmentDropdown}>
                    <p>June 2024</p>
                    <Image unoptimized height={0} width={0} src={DropdownIcon} alt={DropdownIcon} />
                </div> */}

                    <select>
                        <option>June 2024</option>
                        <option>June 2024</option>
                        <option>June 2024</option>
                        <option>June 2024</option>
                    </select>
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
                                {investment.map((investment, index) => (
                                    <tr key={index}>
                                        <td >
                                            <div className={styles.logoAlignment}>
                                                <div className={styles.starIcon}>
                                                    <Image unoptimized height={0} width={0} src={StarIcon} alt="Star Icon" />
                                                </div>
                                                <div className={styles.logo}>
                                                    <Image unoptimized height={0} width={0} src={investment.logo} alt='Logo' />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{investment.companyName}</td>
                                        <td>{investment.founded}</td>
                                        <td>{investment.sector}</td>
                                        <td>{investment.location}</td>
                                        <td>{investment.dateTime}</td>
                                        <td>{investment.amount}</td>
                                        <td>
                                            <div className={styles.stageDetails}>
                                                <p>{investment.stage}</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
