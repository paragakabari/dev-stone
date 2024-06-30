"use client"


import { useRouter } from "next/navigation"
import styles from "./firm.module.scss";
import FirmTop from "./firmTop/page";
import KeyMetrics from "./KeyMetrics/page";
import AboutFirm from "./aboutFirm/aboutFirm";
import FirmOtherOption from "./firmOtherOption";
import FirmPortfolio from "./firmPortfolio";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MainContent } from "@/utils/context";
import { get } from "@/api/base";
import Loader from "@/component/loader";
import { errorCheckAPIResponse } from "@/utils/helpers";
const LeftArrow = "/assets/icons/left-arrow.png";
export default function Firm() {
    const router = useRouter();
    const { companyName } = useContext(MainContent);
    useEffect(() => {
        if (companyName) {

        }

    }, [companyName])
    const response =
                {
                    "accelerator_application_deadline": NaN,
                    "accelerator_duration_(in_weeks)": NaN,
                    "accelerator_program_type": NaN,
                    "acquired_by": NaN,
                    "acquired_by_url": NaN,
                    "acquisition_status": "Made Acquisitions",
                    "acquisition_terms": NaN,
                    "acquisition_type": NaN,
                    "active_tech_count": 23.0,
                    "actively_hiring": NaN,
                    "announced_date": NaN,
                    "announced_date_precision": NaN,
                    "average_visits_(6_months)": "4,285.5",
                    "bounce_rate": "50%",
                    "bounce_rate_growth": "-49.58%",
                    "cb_rank_(company)": "14,073",
                    "cb_rank_(organization)": "14,094",
                    "cb_rank_(school)": NaN,
                    "closed_date": NaN,
                    "closed_date_precision": NaN,
                    "company_type": "For Profit",
                    "contact_email": "jsi@jsitel.com",
                    "contact_job_departments": "Engineering, Finance, Human Resources, Information Technology, Management, Medical & Science, Operations, Pro Services, Product, Sales",
                    "date_of_most_recent_valuation": NaN,
                    "delisted_date": NaN,
                    "delisted_date_precision": NaN,
                    "description": "JSI is a consulting and broadband solutions leader, offering communications providers operational, financial, and engineering services.",
                    "diversity_spotlight_(us_headquarters_only)": NaN,
                    "downloads_last_30_days": NaN,
                    "estimated_revenue_range": "$10M to $50M",
                    "exit_date": NaN,
                    "exit_date_precision": NaN,
                    "facebook": "https://www.facebook.com/jsitel",
                    "founded_date": "Mon, 01 Jan 1962 00:00:00 GMT",
                    "founded_date_precision": "year",
                    "founded_year": 1962,
                    "founders": "Joel lamstein",
                    "full_description": "JSI is a full-service consulting and broadband solutions leader, providing a complete range of operational, financial, management, engineering, regulatory, and strategic assistance to US communications providers over the past 60 years",
                    "funding_status": "Private Equity",
                    "growth_category": NaN,
                    "headquarters_location": "Greenbelt, Maryland, United States",
                    "headquarters_regions": "Washington DC Metro Area, East Coast, Southern US",
                    "hub_tags": NaN,
                    "industries": "Consulting, Financial Services, Information Technology, Telecommunications",
                    "industry_groups": "Financial Services, Hardware, Information Technology, Professional Services",
                    "investment_stage": NaN,
                    "investor_type": NaN,
                    "ipo_date": NaN,
                    "ipo_status": "Private",
                    "it_spend": 5384696.0,
                    "it_spend_(in_usd)": 5384696.0,
                    "it_spend_currency": "USD",
                    "last_equity_funding_amount": 17325000.0,
                    "last_equity_funding_amount_(in_usd)": 17325000.0,
                    "last_equity_funding_amount_currency": "USD",
                    "last_equity_funding_type": "Private Equity",
                    "last_funding_amount": NaN,
                    "last_funding_amount_(in_usd)": NaN,
                    "last_funding_amount_currency": NaN,
                    "last_funding_date": "2024-05-09",
                    "last_funding_type": "Debt Financing",
                    "last_layoff_mention_date": NaN,
                    "last_leadership_hiring_date": NaN,
                    "linkedin": "https://www.linkedin.com/company/jsitel",
                    "money_raised_at_ipo": NaN,
                    "money_raised_at_ipo_(in_usd)": NaN,
                    "money_raised_at_ipo_currency": NaN,
                    "monthly_visits": "5,418",
                    "monthly_visits_growth": "-88.09%",
                    "most_popular_patent_class": NaN,
                    "most_popular_trademark_class": "Scientific and technological services",
                    "most_recent_valuation_range": NaN,
                    "number_of_acquisitions": 3.0,
                    "number_of_apps": NaN,
                    "number_of_articles": 5.0,
                    "number_of_contacts": 139.0,
                    "number_of_diversity_investments": NaN,
                    "number_of_employees": "251-500",
                    "number_of_events": NaN,
                    "number_of_exits": NaN,
                    "number_of_exits_(ipo)": NaN,
                    "number_of_founders": 1.0,
                    "number_of_funding_rounds": 2,
                    "number_of_investments": NaN,
                    "number_of_investors": 3,
                    "number_of_lead_investments": NaN,
                    "number_of_lead_investors": 1.0,
                    "number_of_portfolio_organizations": NaN,
                    "number_of_private_contacts": NaN,
                    "number_of_private_notes": NaN,
                    "number_of_sub-orgs": NaN,
                    "operating_status": "Active",
                    "organization_name": "JSI",
                    "organization_name_url": "https://www.crunchbase.com/organization/jsi",
                    "page_views_/_visit": 2.5,
                    "page_views_/_visit_growth": "147.94%",
                    "patents_granted": 0.0,
                    "phone_number": "301-459-7590",
                    "postal_code": "20770",
                    "price": NaN,
                    "price_(in_usd)": NaN,
                    "price_currency": NaN,
                    "stock_exchange": NaN,
                    "stock_symbol": NaN,
                    "stock_symbol_url": NaN,
                    "tags": NaN,
                    "top_5_investors": "Balance Point Capital Partners, Northwood Ventures, Stone-Goff Partners",
                    "total_equity_funding_amount": 17325000.0,
                    "total_equity_funding_amount_(in_usd)": 17325000.0,
                    "total_equity_funding_amount_currency": "USD",
                    "total_funding_amount": 17325000.0,
                    "total_funding_amount_(in_usd)": 17325000.0,
                    "total_funding_amount_currency": "USD",
                    "total_products_active": 17.0,
                    "trademarks_registered": 1.0,
                    "transaction_name": NaN,
                    "transaction_name_url": NaN,
                    "trend_score_(30_days)": -0.1,
                    "trend_score_(7_days)": -0.2,
                    "trend_score_(90_days)": 6.8,
                    "twitter": "https://www.twitter.com/jsitel",
                    "valuation_at_ipo": NaN,
                    "valuation_at_ipo_(in_usd)": NaN,
                    "valuation_at_ipo_currency": NaN,
                    "visit_duration": "20",
                    "visit_duration_growth": "-97.42%",
                    "website": "http://jsitel.com"
                }
    const [firmData, setfirmData] = useState(response)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (companyName) {
            setIsLoading(true)

            get(`/dashboard/api/company/${companyName}`).then((res) => {
                const response = res?.data?.results;
                setfirmData(response)
                setIsLoading(false)
            }).catch((error) => {
                errorCheckAPIResponse(error)
                setIsLoading(false)
            })
        }
    }, [companyName])
    return (
        <div className={styles.firmSection}>
            {isLoading && (
                <Loader />
            )}
            <div className={styles.breadCrumpAlignmet} onClick={() => router.push("/firm-list")}>
                <Image unoptimized height={0} width={0} src={LeftArrow} alt="LeftArrow" />
                <p> Pe Firm</p>
            </div>
            <FirmTop />
            <KeyMetrics />
            <AboutFirm firmData={firmData}/>
            <FirmOtherOption />
            <FirmPortfolio />
        </div>
    )
}