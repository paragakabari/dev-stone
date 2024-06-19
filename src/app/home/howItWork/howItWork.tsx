import React from 'react'
import styles from "./howItWork.module.scss";

export default function HowItWork() {
    return (
        <div className={styles.howItWorkSection}>
            <div className={styles.howItWorkAlignment}>
                <div className="container">
                    <div className={styles.howItWorkAllDetails}>
                        <div className={styles.howItWorkHeading}>
                            <h2>How It <span>Works</span></h2>
                        </div>
                        <div className={styles.howItWorkAllChildDetails}>
                            <div className={styles.howItWorkAllGrid}>
                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.stepDetails}>
                                        <h3>1. Search for PE Firms</h3>
                                        <p>Identify and compile a list of potential private equity firms using financial databases and industry reports.</p>
                                    </div>
                                </div>

                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.roundBoxAlignment}>
                                        <div className={styles.childRoundAlignment}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_80_9236)">
                                                    <path d="M39.255 36.8983L34.8117 32.455C35.975 30.82 36.6667 28.8267 36.6667 26.6667C36.6667 21.1433 32.19 16.6667 26.6667 16.6667C21.1433 16.6667 16.6667 21.1433 16.6667 26.6667C16.6667 32.19 21.1433 36.6667 26.6667 36.6667C28.8267 36.6667 30.82 35.975 32.455 34.8117L36.8983 39.255C37.2233 39.58 37.65 39.7433 38.0767 39.7433C38.5033 39.7433 38.93 39.58 39.255 39.255C39.9067 38.6033 39.9067 37.55 39.255 36.8983ZM25.545 31.6617C24.5433 31.6617 23.5383 31.2867 22.7717 30.5383L20.885 28.6917C20.2267 28.0467 20.2167 26.9917 20.86 26.335C21.5033 25.6767 22.5583 25.6667 23.2167 26.3083L25.1033 28.155C25.3433 28.3917 25.735 28.39 25.9733 28.155L30.495 23.7817C31.1583 23.1467 32.215 23.165 32.8517 23.83C33.49 24.4933 33.4683 25.5483 32.8033 26.1867L28.2983 30.5433C27.545 31.2867 26.5467 31.6617 25.545 31.6617ZM13.3333 26.6667C13.3333 19.315 19.315 13.3333 26.6667 13.3333C29.0967 13.3333 31.37 13.9967 33.3333 15.1383V8.33333C33.3333 3.73833 29.5933 0 25 0H8.33167C3.73667 0 0 3.74 0 8.335V31.6667C0 36.2617 3.74 40 8.33333 40H26.6667C19.315 40 13.3333 34.0183 13.3333 26.6667ZM16.6667 8.33333H25C25.92 8.33333 26.6667 9.07833 26.6667 10C26.6667 10.9217 25.92 11.6667 25 11.6667H16.6667C15.7467 11.6667 15 10.9217 15 10C15 9.07833 15.7467 8.33333 16.6667 8.33333ZM10 28.3333H8.33333C7.41333 28.3333 6.66667 27.5883 6.66667 26.6667C6.66667 25.745 7.41333 25 8.33333 25H10C10.92 25 11.6667 25.745 11.6667 26.6667C11.6667 27.5883 10.92 28.3333 10 28.3333ZM10 20H8.33333C7.41333 20 6.66667 19.255 6.66667 18.3333C6.66667 17.4117 7.41333 16.6667 8.33333 16.6667H10C10.92 16.6667 11.6667 17.4117 11.6667 18.3333C11.6667 19.255 10.92 20 10 20ZM10 11.6667H8.33333C7.41333 11.6667 6.66667 10.9217 6.66667 10C6.66667 9.07833 7.41333 8.33333 8.33333 8.33333H10C10.92 8.33333 11.6667 9.07833 11.6667 10C11.6667 10.9217 10.92 11.6667 10 11.6667Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_80_9236">
                                                        <rect width="40" height="40" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.howItWorkAllGrid}>
                                <div className={styles.howItWorkAllGridItem}>

                                </div>

                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.roundBoxAlignment}>
                                        <div className={styles.childRoundAlignment}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M40 31.6667V6.66675C40 3.91008 37.7567 1.66675 35 1.66675H5C2.24333 1.66675 0 3.91008 0 6.66675V31.6667H18.3333V35.0001H10V38.3334H30V35.0001H21.6667V31.6667H40ZM26.6667 8.33341H35V11.6667H26.6667V8.33341ZM26.6667 15.0001H35V18.3334H26.6667V15.0001ZM26.6667 21.6667H35V25.0001H26.6667V21.6667ZM13.3333 25.0001C8.73167 25.0001 5 21.2684 5 16.6667C5 12.6351 7.86333 9.27341 11.6667 8.50175V17.3567L17.9233 23.6134C16.6067 24.4851 15.03 25.0001 13.3333 25.0001ZM20.28 21.2567L15 15.9767V8.50175C18.8033 9.27341 21.6667 12.6351 21.6667 16.6667C21.6667 18.3651 21.1533 19.9401 20.28 21.2567Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.stepDetails}>
                                        <h3>2. Analyze Data</h3>
                                        <p>Assess key metrics and financial indicators of identified PE firms to determine investment potential.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.howItWorkAllGrid}>
                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.stepDetails}>
                                        <h3>3. More Investments</h3>
                                        <p>Develop and execute strategies to increase investments in selected PE firms, ensuring alignment with goals.</p>
                                    </div>
                                </div>

                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.roundBoxAlignment}>
                                        <div className={styles.childRoundAlignment}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_80_9242)">
                                                    <path d="M20 0C14.4767 0 10 4.47667 10 10C10 15.5233 14.4767 20 20 20C25.5233 20 30 15.5233 30 10C30 4.47667 25.5233 0 20 0ZM21.8767 16.3333H21.3333V18.2133C20.8983 18.285 20.4567 18.3333 20 18.3333C19.5433 18.3333 19.1017 18.2833 18.6667 18.2117V16.3333H18.3333C16.3317 16.3333 14.685 14.7917 14.515 12.8333H17.215C17.3583 13.315 17.805 13.6667 18.3333 13.6667H21.8767C22.4033 13.6667 22.8333 13.2383 22.8333 12.71C22.8333 12.2567 22.51 11.8617 22.0633 11.7717L17.4117 10.84C15.7233 10.5017 14.5 9.00833 14.5 7.28833C14.5 5.29 16.125 3.66667 18.1217 3.66667H18.6667V1.66667H21.3333V3.66667H21.6667C23.6683 3.66667 25.315 5.20833 25.485 7.16667H22.785C22.6417 6.685 22.195 6.33333 21.6667 6.33333H18.1217C17.595 6.33333 17.1667 6.76167 17.1667 7.29C17.1667 7.74333 17.49 8.13833 17.935 8.22667L22.5883 9.15833C24.2767 9.495 25.5 10.99 25.5 12.71C25.5 14.7083 23.875 16.3317 21.8767 16.3317V16.3333ZM15.27 25.9533C14.8133 25.32 14.9533 24.3283 15.5717 23.7083L16.4567 22.84C17.5867 23.1533 18.7717 23.3333 20 23.3333C20.315 23.3333 20.6217 23.3083 20.9317 23.2867L17.815 26.1783C17.47 26.525 16.9933 26.7033 16.5017 26.6617C16.005 26.6217 15.5683 26.37 15.27 25.9533ZM40 18.3333V33.3333H33.6433L22.2467 23.1283C25.5333 22.5667 28.4133 20.8067 30.4133 18.305C30.4283 18.3133 30.4533 18.325 30.4667 18.3333H40ZM21.6783 27.0917L29.6417 34.2233L22.24 40H17.76L9.21833 33.3333H0V18.3333H9.60833C10.595 19.5617 11.7983 20.605 13.155 21.42C11.4333 23.2033 11.1733 25.9733 12.5633 27.8967C13.43 29.1033 14.765 29.8617 16.2167 29.98C16.36 29.9933 16.505 30 16.6483 30C17.9683 30 19.23 29.48 20.1217 28.5833L21.68 27.0917H21.6783Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_80_9242">
                                                        <rect width="40" height="40" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.howItWorkAllGrid}>
                                <div className={styles.howItWorkAllGridItem}>

                                </div>

                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.roundBoxAlignment}>
                                        <div className={styles.childRoundAlignment}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_80_9245)">
                                                    <path d="M30 26.6667C30 27.2967 30.4517 27.83 31.0733 27.9333L36.1433 28.7783C38.3783 29.15 40.0017 31.0667 40.0017 33.3333C40.0017 36.09 37.7583 38.3333 35.0017 38.3333V40H31.6683V38.3333C28.9117 38.3333 26.6683 36.09 26.6683 33.3333H30.0017C30.0017 34.2517 30.75 35 31.6683 35H35.0017C35.92 35 36.6683 34.2517 36.6683 33.3333C36.6683 32.7033 36.2167 32.17 35.595 32.0667L30.525 31.2217C28.29 30.85 26.6667 28.9333 26.6667 26.6667C26.6667 23.91 28.91 21.6667 31.6667 21.6667V20H35V21.6667C37.7567 21.6667 40 23.91 40 26.6667H36.6667C36.6667 25.7483 35.9183 25 35 25H31.6667C30.7483 25 30 25.7483 30 26.6667ZM25 0H23.3333V16.6667H40V15C40 6.73 33.27 0 25 0ZM26.7183 20H20V3.33333H18.3333C8.225 3.33333 0 11.5583 0 21.6667C0 31.775 8.225 40 18.3333 40C20.7933 40 23.1367 39.505 25.2817 38.6233C24.0833 37.18 23.3333 35.3517 23.3333 33.3333V26.6667C23.3333 23.9317 24.6767 21.52 26.7183 20Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_80_9245">
                                                        <rect width="40" height="40" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.howItWorkAllGridItem}>
                                    <div className={styles.stepDetails}>
                                        <h3>4. Generate Reports</h3>
                                        <p>Create detailed reports summarizing research, analysis, and investment activities for stakeholders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
