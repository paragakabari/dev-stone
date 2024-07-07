import React from 'react'
import styles from "./firmPortfolio.module.scss";
import Image from 'next/image';
import Pagination from '@/app/firm-list/pagination/page';
import moment from 'moment';
const UPRightArrow = "/assets/icons/up-right.svg";
const TopBottomArrow = "/assets/icons/top-bottom-arrow.svg";
const Logo = "/assets/images/logo1.png";
const StarIcon = "/assets/icons/star-icon.svg";
const data = [
    {
        logo: "/assets/images/pologo.png",
        name: "BigScoots",
        founded: 2010,
        sector: "Business Services",
        location: "Illinois",
        firstInvestment: "Series B (2023)",
        stage: "Series B"
    },
    {
        logo: "/assets/images/pologo2.png",
        name: "JSI",
        founded: 1962,
        sector: "Other",
        location: "Maryland",
        firstInvestment: "Post IPO (2007)",
        stage: "Acquired"
    },
    {
        logo: "/assets/images/pologo3.png",
        name: "Centerline Communications",
        founded: 2006,
        sector: "Telecom",
        location: "Massachusetts",
        firstInvestment: "Series B (2020)",
        stage: "Late Stage"
    },
    {
        logo: "/assets/images/pologo4.png",
        name: "Walker Sands",
        founded: 2001,
        sector: "Business Services",
        location: "Illinois",
        firstInvestment: "Unidentified",
        stage: "Late Stage"
    },
    {
        logo: "/assets/images/pologo5.png",
        name: "Thymes",
        founded: 1982,
        sector: "Consumer Goods",
        location: "Minnesota",
        firstInvestment: "Unidentified",
        stage: "Seed"
    },
    {
        logo: "/assets/images/pologo6.png",
        name: "SUEZ",
        founded: 1869,
        sector: "Environment",
        location: "France",
        firstInvestment: "Unidentified",
        stage: "Acquired"
    },
    {
        logo: "/assets/images/pologo7.png",
        name: "Transurban",
        founded: 1995,
        sector: "Real Estate",
        location: "Melbourne",
        firstInvestment: "Unidentified",
        stage: "Public"
    },
    {
        logo: "/assets/images/pologo8.png",
        name: "Naturgy",
        founded: 1843,
        sector: "Energy",
        location: "Spain",
        firstInvestment: "Series B (2020)",
        stage: "Late Stage"
    },
    {
        logo: "/assets/images/pologo9.png",
        name: "Vantage Data Centers",
        founded: 2010,
        sector: "Business Services",
        location: "California",
        firstInvestment: "Conventional Debt (2023)",
        stage: "Acquired"
    },
    {
        logo: "/assets/images/pologo10.png",
        name: "Vantage Towers",
        founded: 2020,
        sector: "Telecom",
        location: "Germany",
        firstInvestment: "Unidentified",
        stage: "Public"
    }
]
export default function FirmPortfolio({ investments }) {
    const titleData = [
        {
            key: '',
            title: 'Logo'
        },
        {
            key: 'investor_names',
            title: 'Investor Name',
        }, {
            key: 'announced_date',
            title: 'Date & Time',
            isFormate: 'date_time'
        },
        {
            key: 'money_raised_(in_usd)',
            title: 'Money raised in usd',
            isFormate: 'USD'
        },
        {
            key: 'number_of_funding_rounds',
            title: 'Number of funding rounds'
        },

        {
            key: 'funding_type',
            title: 'funding type',

        }
    ]

    return (
        <div className={styles.firmPortfolioSection}>
            <div className={styles.firmPortfolioBox}>
                <div className={styles.firmPortfolioBoxHeading}>
                    <h4>Investment ({investments?.length || '0'})</h4>
                    {/* <select>
                        <option>June 2024</option>
                        <option>June 2023</option>
                        <option>June 2022</option>
                        <option>June 2021</option>
                        <option>June 2020</option>
                    </select> */}
                </div>

                <div className={styles.firmPortfolioBoxDetails}>
                    <div className={styles.firmPortfolioTableDetailsAlignment}>
                        <table cellPadding={0} cellSpacing={0}>
                            <thead>
                                <tr>
                                    {titleData?.map((item, index) => {
                                        return (
                                            <th key={index}>
                                                {item?.title}
                                            </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {investments && investments?.map((investment, index) => (
                                    <tr key={index}>
                                        {titleData?.map((tItem, index) => {
                                            return (
                                                <td key={index}>

                                                    {tItem.title === "Logo" ? (
                                                        <div className={styles.logoAlignment}>
                                                            {/* <div className={styles.starIcon}>
                                                                <Image unoptimized height={0} width={0} src={StarIcon} alt="Star Icon" />
                                                            </div> */}
                                                            <div className={styles.logo}>
                                                                <Image unoptimized height={0} width={0} src={'assets/images/rlogo1.png'} alt='Logo' />
                                                            </div>
                                                        </div>
                                                    )
                                                        :
                                                        tItem?.isFormate === "USD" ?
                                                            investment[tItem.key] ? `$${investment[tItem.key]?.toLocaleString('en-US')}` : '-'
                                                            :
                                                            tItem?.isFormate === "date_time" ?
                                                                investment[tItem.key] ? moment(investment[tItem.key]).format('DD/MM/YYYY') : '-' :
                                                                (investment[tItem.key] || '-')
                                                    }
                                                </td>
                                            )
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <Pagination /> */}
            </div>
        </div>
    )
}
