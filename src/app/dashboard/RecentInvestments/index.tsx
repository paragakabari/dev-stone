import React, { useEffect, useState } from 'react'
import styles from "./RecentInvestments.module.scss";
import Image from 'next/image';
import { get } from '@/api/base';
import moment from 'moment';
import Loader from '@/component/loader';
import { errorCheckAPIResponse } from '@/utils/helpers';
const DropdownIcon = "/public/assets/icons/dropdown-icon.svg";
const StarIcon = "/assets/icons/star-icon.svg";
// const investment = [
//     {
//         "logo": "/assets/images/rlogo1.png",
//         "companyName": "BigGeodata",
//         "founded": 2010,
//         "sector": "Business Services",
//         "location": "Illinois",
//         "dateTime": "31/05/2024 - 08:00 AM",
//         "amount": "$24,295",
//         "stage": "ACQUIRED"
//     },
//     {
//         "logo": "/assets/images/rlogo2.png",
//         "companyName": "JSI",
//         "founded": 1962,
//         "sector": "Other",
//         "location": "Maryland",
//         "dateTime": "30/05/2024 - 02:30 PM",
//         "amount": "$82,000",
//         "stage": "ACQUIRED"
//     },
//     {
//         "logo": "/assets/images/rlogo3.png",
//         "companyName": "Centeline Communications",
//         "founded": 2006,
//         "sector": "Telecom",
//         "location": "Massachusetts",
//         "dateTime": "31/05/2024 - 10:30 AM",
//         "amount": "$48,400",
//         "stage": "LATE STAGE"
//     },
//     {
//         "logo": "/assets/images/rlogo4.png",
//         "companyName": "Walker Sands",
//         "founded": 2001,
//         "sector": "Business Services",
//         "location": "Illinois",
//         "dateTime": "12/04/2024 - 03:00 PM",
//         "amount": "$33,333",
//         "stage": "LATE STAGE"
//     },
//     {
//         "logo": "/assets/images/rlogo5.png",
//         "companyName": "Thymes",
//         "founded": 1982,
//         "sector": "Consumer Goods",
//         "location": "Minnesota",
//         "dateTime": "31/03/2024 - 03:00 PM",
//         "amount": "$46,955",
//         "stage": "SELL"
//     }
// ]

export default function RecentInvestments() {
    const [RecentInvestments, setRecentInvestments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const titleData = [
        {
            key: 'logo_url',
            title: 'Logo'
        },
        {
            key: 'organization_name',
            title: 'Company Name',
        }, 
        // {
        //     key: 'founded_year',
        //     title: 'Founded',
        // },
        {
            key: 'organization_industries',
            title: 'Sector'
        },
        {
            key: 'organization_location',
            title: 'Location'
        },
        {
            key: 'announced_date',
            title: 'Date & Time',
            isFormate: 'date_time'
        },
        {
            key: 'total_funding_amount_(in_usd)',
            title: 'Amount',
            isFormate: 'USD'

        },
        {
            key: '',
            title: 'Stage',
            isButton: true
        },
    ]

    useEffect(() => {
        setIsLoading(true)
        get(`/dashboard/api/latest-investments`).then((res) => {            
            const response = res?.data?.results
            setRecentInvestments(response)
            setIsLoading(false)
        }).catch((error) => {
            errorCheckAPIResponse(error)
            setIsLoading(false)
        })
    }, [])
    return (
        <div className={styles.recentInvestmentSection}>
            <div className={styles.recentInvestmentBOx}>
                <div className={styles.recentInvestmentHeading}>
                    <h2>Recent Investments</h2>

                    {/* <div className={styles.recentInvestmentDropdown}>
                    <p>June 2024</p>
                    <Image unoptimized height={0} width={0} src={DropdownIcon} alt={DropdownIcon} />
                </div> */}

                    {/* <select>
                        <option>June 2024</option>
                        <option>June 2024</option>
                        <option>June 2024</option>
                        <option>June 2024</option>
                    </select> */}
                </div>

                <div className={styles.recentInvestmentDetailsAlignment}>
                    <div className={styles.recentInvestmentDetailsTable}>
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
                            <tbody style={{position:'relative'}}>
                            {isLoading && (
                                <Loader />
                            )}
                                {RecentInvestments.map((investment, index) => (
                                    <tr key={index}>
                                        {titleData?.map((tItem, index) => {
                                            return (
                                                
                                                <td key={index}>
                                                    
                                                    {tItem.title === "Logo" ? (
                                                        
                                                        <div className={styles.logoAlignment}>
                                                            <div className={styles.starIcon}>
                                                                <Image unoptimized height={0} width={0} src={StarIcon} alt="Star Icon" />
                                                            </div>
                                                            <div className={styles.logo}>
                                                                <Image unoptimized height={0} width={0} src={investment[tItem.key]} alt='Logo' />
                                                            </div>
                                                        </div>
                                                    ) : tItem?.isButton ?
                                                        <div className={styles.stageDetails}>
                                                            <p>ACQUIRED</p>
                                                        </div>
                                                        :
                                                        tItem?.isFormate === "USD" ?
                                                            investment[tItem.key] ? `$${investment[tItem.key]?.toLocaleString('en-US')}` : '-'
                                                            :
                                                            (tItem.key === 'organization_industries') ?
                                                            (investment[tItem.key]?.split(',').length || '-')
                                                            :
                                                            tItem?.isFormate === "date_time" ?
                                                                investment[tItem.key] ? moment(investment[tItem.key]).format('DD/MM/YYYY - HH:mm a') : '-' :
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
            </div>
        </div >
    )
}
