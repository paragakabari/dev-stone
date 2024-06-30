import React, { useContext } from 'react'
import styles from "./firmListTable.module.scss";
import Image from 'next/image';
import Pagination from '../pagination/page';
import { useRouter } from 'next/navigation';
import Loader from '@/component/loader';
import { MainContent } from '@/utils/context';
const Logo = "/assets/images/logo1.png";
const StarIcon = "/assets/icons/star-icon.svg";
const TopBottomArrow = "/assets/icons/top-bottom-arrow.svg";
const UPRightArrow = "/assets/icons/up-right.svg";

export default function FirmListTable(props) {
    const { PEFirmData, isLoading } = props;
    console.log('PEFirmDataPEFirmDataPEFirmDataPEFirmData', PEFirmData);
    const { setCompanyName } = useContext(MainContent);

    const redirect = useRouter();
    const titleData = [
        {
            key: '',
            title: 'Logo'
        },
        {
            key: '',
            title: 'PE Firm Name',
            isSorting: true
        }, {
            key: 'founded_year',
            title: 'Founded',
            isSorting: true
        },
        {
            key: '',
            title: 'Portfolio'
        },
        {
            key: '',
            title: 'Investments',
            isSorting: true
        },
        {
            key: '',
            title: 'Sector'
        },
        {
            key: '',
            title: 'Geographical Focus'
        },
        {
            key: '',
            title: '',
            isRedirect: true
        },
    ]

    return (
        <div className={styles.firmListTableSection}>
            <div className={styles.firmListTableBox}>
                <div className={styles.firmListTableDetailsAlignment}>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                {titleData?.map((item, index) => {
                                    return (
                                        <th key={index}>
                                            <div className={styles.filterALignment}>
                                                <label>
                                                    {item?.title}
                                                </label>
                                                {item.isSorting && (
                                                    <Image unoptimized height={0} width={0} src={TopBottomArrow} alt="TopBottomArrow" />
                                                )}
                                            </div>
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <Loader />
                            )}
                            {PEFirmData.map((firm, key) => (
                                <tr key={key}>
                                    {titleData?.map((tItem, index) => {
                                        return (
                                            <td key={index}>

                                                {tItem.title === "Logo" ? (
                                                    <div className={styles.logoAlignment}>
                                                        <div className={styles.starIcon}>
                                                            <Image unoptimized height={0} width={0} src={StarIcon} alt="StarIcon" />
                                                        </div>
                                                        <div className={styles.logo}>
                                                            <Image unoptimized height={0} width={0} src={'/assets/images/logo1.png'} alt={firm.name} />
                                                        </div>
                                                    </div>
                                                ) : tItem?.isRedirect ?
                                                    <div className={styles.upRightArrow} onClick={() => {
                                                        setCompanyName(firm?.company_type)
                                                        redirect.push("/firm")
                                                    }}>
                                                        <Image unoptimized height={0} width={0} src={UPRightArrow} alt="UPRightArrow" />
                                                    </div>
                                                    :
                                                    (firm[tItem.key] || '-')
                                                }
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {PEFirmData.length > 0 ?
                    <Pagination />
                    :
                    <div className={styles.firmListTableNoData}>No data available</div>
                }
            </div>

        </div>
    )
}
