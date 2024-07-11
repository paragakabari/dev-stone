import React from "react";
import styles from "./aboutFirm.module.scss";
import classNames from "classnames";
import Image from "next/image";
const MarkerIcon = "/assets/icons/marker.svg";
const PhoneIcon = "/assets/icons/phone-call.svg";
const EmailIcon = "/assets/icons/email-icon-blue.svg";
const ProfileImg = "/assets/images/demo-profile-img.png";
const InfoIcon = "/assets/icons/info.png";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AboutFirm({ firmData }) {
  console.log('firmDatafirmDatafirmDatafirmDatteeeeeeeeeeeeeeeeeea', firmData);

  const { company_info, tracxn_detail } = firmData;
  const fundingData = {
    labels: ["The Inde..", "Merkle", "CAA", "Prophet", "Croud", "The Chan.."],
    datasets: [
      {
        label: "Previous rounds",
        data: [300, 200, 100, 50, 20, 10],
        backgroundColor: "#1d63dc",
        borderColor: "#1d63dc",
        borderWidth: 1,
      },
      {
        label: "Last Equity Round Funding",
        data: [500, 400, 300, 200, 100, 50],
        backgroundColor: "#1ccab8",
        borderColor: "#1ccab8",
        borderWidth: 1,
      },
    ],
  };

  const locationData = {
    labels: ["United States", "India", "United Kingdom", "Canada", "Australia"],
    datasets: [
      {
        label: "No. of Competitors",
        data: [26592, 14760, 7885, 3280, 2986],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const marketShareData = {
    labels: ["FMI", "RedSeer", "Technologies", "Manta", "MARKETING-INTER"],
    datasets: [
      {
        label: "Market Share",
        data: [22, 16, 17, 17, 28],
        backgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#FF4D4D",
        ],
        hoverBackgroundColor: [
          "#0078E0",
          "#00B38A",
          "#EAAA22",
          "#E66630",
          "#E64545",
        ],
      },
    ],
  };
  const foundingTitle = [
    {
      key: 'funding_date',
      title: 'Funding Date',
      isFormate: 'date_time'
    },
    {
      key: 'round_name',
      title: 'Round Name',
    }, {
      key: 'institutional_investors',
      title: 'Institutional Investors',
    },
    {
      key: 'facilitators',
      title: 'Facilitators'
    },
    {
      key: 'funding_amount_(usd)',
      title: 'Funding Amount (USD) ',
      isFormate: 'USD'
    },
    {
      key: 'total_funding_(usd)',
      title: 'Total Funding Amount (USD)',
      isFormate: 'USD'
    },
    {
      key: 'round_post-money_valuation_(usd)',
      title: 'Post Money Valuation (USD)',
      isFormate: 'USD'
    },
  ]
  const pepoleTitle = [
    {
      key: 'founder_name',
      title: 'Name',
    },
    {
      key: 'title',
      title: 'Designation',
    }, {
      key: 'description',
      title: 'Description',
    }
  ]
  const acquisitionTitle = [
    {
      key: 'acquired_company_name_unnamed:_3_level_1',
      title: 'Acquired Company Name'
    },
    {
      key: 'acquisition_date_unnamed:_1_level_1',
      title: 'Acquisition Date',
      isFormate: 'date_time'
    }, {
      key: 'acquisition_type_unnamed:_2_level_1',
      title: 'Acquistion Type',
    },
    {
      key: 'sellers_unnamed:_6_level_1',
      title: 'Seller(s)'
    },
    {
      key: 'acquired_company_details_total_funding_(usd)',
      title: 'Total Funding (USD)',
      isFormate: 'USD'
    }
  ]
  return (
    <div className={styles.aboutFirmSection}>
      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>About the Firm</h2>
        </div>
        <div className={styles.aboutFirmBoxBottomAlignment}>
          <p>{company_info?.full_description}</p>
          <div className={styles.bottomRightAlignment}>
            <div className={styles.bottomRightFlex}>
              <div>
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={MarkerIcon}
                  alt="MarkerIcon"
                />
              </div>
              <p>
                {company_info?.headquarters_location},{company_info?.postal_code}
              </p>
            </div>
            <div className={styles.bottomRightFlex}>
              <div>
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={PhoneIcon}
                  alt="PhoneIcon"
                />
              </div>
              <p>{company_info?.phone_number}</p>
            </div>
            <div className={styles.bottomRightFlex}>
              <div>
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={EmailIcon}
                  alt="EmailIcon"
                />
              </div>
              <p>{company_info?.contact_email}</p>
            </div>
          </div>
        </div>
        {/* <div
          className={classNames(styles.aboutFirmBoxHeading, styles.secondTYpe)}
        >
          <h2>Key Personnel</h2>
        </div> */}

        {/* <div className={styles.teamDetailsAlignment}>
          <div className={styles.teamDetailsGrid}>
            <div className={styles.teamDetailsGridItem}>
              <div className={styles.teamDetailsBox}>
                <div className={styles.teamProfile}>
                  <Image
                    unoptimized
                    height={0}
                    width={0}
                    src={ProfileImg}
                    alt="ProfileImg"
                  />
                </div>

                <div className={styles.teamNameAlignment}>
                  <h4>Glenn Youngkin</h4>
                  <p>Co-CEO</p>
                </div>
              </div>
            </div>
            <div className={styles.teamDetailsGridItem}>
              <div className={styles.teamDetailsBox}>
                <div className={styles.teamProfile}>
                  <Image
                    unoptimized
                    height={0}
                    width={0}
                    src={ProfileImg}
                    alt="ProfileImg"
                  />
                </div>

                <div className={styles.teamNameAlignment}>
                  <h4>Glenn Youngkin</h4>
                  <p>Co-CEO</p>
                </div>
              </div>
            </div>
            <div className={styles.teamDetailsGridItem}>
              <div className={styles.teamDetailsBox}>
                <div className={styles.teamProfile}>
                  <Image
                    unoptimized
                    height={0}
                    width={0}
                    src={ProfileImg}
                    alt="ProfileImg"
                  />
                </div>

                <div className={styles.teamNameAlignment}>
                  <h4>Glenn Youngkin</h4>
                  <p>Co-CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>Exits of {company_info?.organization_name}</h2>
        </div>
        <div className={styles.aboutChildHeading}>
          <h3>Acquisition Info</h3>
        </div>
        <div className={styles.tableDetailsAlignment}>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Acquirers </th>
                <th>Stake Acquired</th>
                <th>Acquired Amount</th>
                <th>Acquisition Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {tracxn_detail?.company_detail[0].acquired_date ? moment(tracxn_detail?.company_detail[0].acquired_date).format('MMM DD, YYYY') : '-'}
                </td>
                <td>{tracxn_detail?.company_detail[0].acquired_by || '-'}</td>
                <td>{company_info?.acquisition_status || '-'}</td>
                <td>{tracxn_detail?.company_detail[0][`acquired_amount_(usd)`] ? tracxn_detail?.company_detail[0][`acquired_amount_(usd)`].toLocaleString('en-US') : '-'}</td>
                <td>{tracxn_detail?.company_detail[0]?.acquisition_type || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutChildHeading}>
          <h3>Acquisition List</h3>
        </div>
        <div className={styles.tableDetailsAlignment}>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                {acquisitionTitle?.map((item, index) => {
                  return (
                    <th className={styles.textLeft} key={index}>{item?.title}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tracxn_detail?.acquisitions?.map((founding, index) => {
                return (
                  <tr key={index}>
                    {acquisitionTitle?.map((tItem, index) => {
                      return (
                        <td key={index}>

                          {tItem?.isFormate === "USD" ?
                            founding[tItem.key] === "Undisclosed" ? '-' : `${founding[tItem.key]}` ? `$${founding[tItem.key]?.toLocaleString('en-US')}` : '-'
                            :
                            tItem?.isFormate === "date_time" ?
                              founding[tItem.key] ? moment(founding[tItem.key]).format('MMM DD,YYYY') : '-' :
                              (founding[tItem.key] || '-')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>People in {company_info?.organization_name}</h2>
        </div>
        <div className={styles.aboutChildHeading}>
          <h3>Founders & Key People</h3>
        </div>
        <div className={styles.tableDetailsAlignment}>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                {pepoleTitle?.map((item, index) => {
                  return (
                    <th className={styles.textLeft} key={index}>{item?.title}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tracxn_detail?.people?.map((founding, i) => {
                return (
                  <tr key={i}>
                    {pepoleTitle?.map((tItem, index) => {
                      return (
                        <td key={index}>

                          {
                            (founding[tItem.key] || '-')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>Funding & Investors of {company_info?.organization_name}</h2>
        </div>

        <div className={styles.aboutDetailsBoxAlignment}>
          <div className={styles.aboutGridAlignment}>
            <div className={styles.aboutGridItem}>
              <h4>{tracxn_detail?.funding_rounds.length || '0'}</h4>
              <h5>Funding Rounds</h5>
              {/* <p>2 Early-Stage</p> */}
            </div>
            <div className={styles.aboutGridItem}>
              <h4>{company_info[`total_funding_amount_(in_usd`] ? `$${company_info[`total_funding_amount_(in_usd`]?.toLocaleString('en-US')}` : '-'}</h4>
              <h5>Total Equity Funding</h5>
              {/* <p>$10.5M Largest Round</p> */}
            </div>
            <div className={styles.aboutGridItem}>
              <h4>4</h4>
              <h5>Investors</h5>
              <p>4 Institutionals / 0 Angel</p>
            </div>
            <div className={styles.aboutGridItem}>
              <h4> - </h4>
              <p>Post-Money Valuation</p>
            </div>
            <div className={styles.aboutGridItem}>
              <h4>-</h4>
              <h5>Funding Multiple</h5>
              <p>(EV/Revenue)</p>
            </div>
          </div>
        </div>

        <div
          className={classNames(styles.aboutFirmBoxHeading, styles.secondTYpe)}
        >
          <h2>All Funding Rounds</h2>
        </div>

        <div className={styles.tableDetailsAlignment}>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                {foundingTitle?.map((item, index) => {
                  return (
                    <th className={styles.textLeft} key={index}>{item?.title}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tracxn_detail?.funding_rounds?.map((founding, index) => {
                return (
                  <tr key={index}>
                    {foundingTitle?.map((tItem, index) => {
                      return (
                        <td key={index}>

                          {tItem?.isFormate === "USD" ?
                            founding[tItem.key] === "Undisclosed" ? '-' : `${founding[tItem.key]}` ? `$${founding[tItem.key]?.toLocaleString('en-US')}` : '-'
                            :
                            tItem?.isFormate === "date_time" ?
                              founding[tItem.key] ? moment(founding[tItem.key]).format('MMM DD,YYYY') : '-' :
                              (founding[tItem.key] || '-')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>Competitors of {company_info?.organization_name}</h2>
        </div>

        <div className={styles.aboutDetailsBoxAlignment}>
          <div
            className={classNames(
              styles.aboutGridAlignment,
              styles.aboutFourGrid
            )}
          >
            <div className={styles.aboutGridItem}>
              <h4>
                31 <sup>st</sup>
              </h4>
              <h5>
                Rank
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={InfoIcon}
                  alt="InfoIcon"
                />
              </h5>
              <p>Among 108,282 Competitors</p>
            </div>
            <div className={styles.aboutGridItem}>
              <h4>85,641</h4>
              <h5>
                Active Competitors
                <Image
                  unoptimized
                  height={0}
                  width={0}
                  src={InfoIcon}
                  alt="InfoIcon"
                />
              </h5>
              <p>715 Funded/3,104 Exited</p>
            </div>
            <div className={styles.aboutGridItem}>
              <h4>$6.18B</h4>
              <h5>Funding</h5>
              <p>1,287 Funding Rounds</p>
            </div>
            <div className={styles.aboutGridItem}>
              <h4> 3,602 </h4>
              <h5>Investors</h5>
              <p>Among 108,282 Competitors</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomGridAlignment}>
          <div className={styles.bottomGridBox}>
            <h6>Top Competitors By Funding</h6>
            <div className={styles.doughnutChart}>
              <Bar
                data={fundingData}
                options={{
                  responsive: true,
                  indexAxis: "y",
                  plugins: {
                    legend: { display: false },
                    title: { display: false },
                  },
                  scales: {
                    x: {
                      beginAtZero: true,
                      ticks: {
                        callback: function (value) {
                          return value + "M";
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.bottomGridBox}>
            <h6>Top active competitors by Location</h6>
            <div className={styles.doughnutChart}>
              <Bar
                data={locationData}
                options={{
                  responsive: true,
                  indexAxis: "y",
                  plugins: {
                    legend: { display: false },
                    title: { display: false },
                  },
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.bottomGridBox}>
            <h6>
              Latest Market Share <sup>Beta</sup>
              <Image
                unoptimized
                height={0}
                width={0}
                src={InfoIcon}
                alt="InfoIcon"
              />
            </h6>
            <div className={styles.doughnutChart}>
              <Pie
                data={marketShareData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      callbacks: {
                        label: function (tooltipItem) {
                          let label = tooltipItem.label || "";
                          let value = tooltipItem.raw || 0;
                          return `${label}: ${value}%`;
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
