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

  return (
    <div className={styles.aboutFirmSection}>
      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>About the Firm</h2>
        </div>
        <div className={styles.aboutFirmBoxBottomAlignment}>
          <p>{firmData?.full_description}</p>
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
                {firmData?.headquarters_location},{firmData?.postal_code}
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
              <p>{firmData?.phone_number}</p>
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
              <p>{firmData?.contact_email}</p>
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
          <h2>Exits of The Channel Company</h2>
        </div>
        <div className={styles.aboutChildHeading}>
          <h3>Acquisition Info</h3>
        </div>
        <div className={styles.tableDetailsAlignment}>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>Acquisition Date</th>
                <th>Acquirer(s) </th>
                <th>Stake Acquired</th>
                <th>Acquisition Amount</th>
                <th>Seller(s)</th>
                <th>Facilitator(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nov 09, 2021</td>
                <td>Eagle Tree Capital</td>
                <td>-</td>
                <td>-</td>
                <td>Stone-Goff Partners</td>
                <td>
                  JEGI CLARITY, Fredrikson & Byron <a>+3 more</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>People in The Channel Company</h2>
        </div>
        <div className={styles.aboutChildHeading}>
          <h3>Founders & Key People</h3>
        </div>
        <div className={styles.tableDetailsAlignment}>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th className={styles.textLeft}>Name</th>
                <th className={styles.textLeft}>Designation</th>
                <th className={styles.textLeft}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>1 .</span> Matthew Yorke in
                </td>
                <td>CEO</td>
                <td>
                  Ex-Foundry, Northstar Travel Group, SourceMedia, IDG
                  Enterprise, IDG Global Solutions.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>Funding & Investors of The Channel Company</h2>
        </div>

        <div className={styles.aboutDetailsBoxAlignment}>
          <div className={styles.aboutGridAlignment}>
            <div className={styles.aboutGridItem}>
              <h4>2</h4>
              <h5>Funding Rounds</h5>
              <p>2 Early-Stage</p>
            </div>
            <div className={styles.aboutGridItem}>
              <h4>$10.5M</h4>
              <h5>Total Equity Funding</h5>
              <p>$10.5M Largest Round</p>
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
                <th className={styles.textLeft}>Date</th>
                <th className={styles.textLeft}>Round Name </th>
                <th className={styles.textLeft}>Amount</th>
                <th className={styles.textLeft}>Investors & Facilitators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dec 07, 2016</td>
                <td>Series A</td>
                <td>Undisclosed</td>
                <td>
                  <p>Institutional: Stone-Goff Partners</p>
                  <p>Facilitator: Bowstring Advisors</p>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>Series A</td>
                <td>$ 10.5M</td>
                <td>
                  <p>Institutional: Northstar Capital</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.aboutFirmBox}>
        <div className={styles.aboutFirmBoxHeading}>
          <h2>Competitors of The Channel Company</h2>
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
            <div  className={styles.doughnutChart}>
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
