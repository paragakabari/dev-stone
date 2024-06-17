import React from 'react'
import styles from "./aboutFirm.module.scss";
import classNames from 'classnames';
const MarkerIcon = "/assets/icons/marker.svg";
const PhoneIcon = "/assets/icons/phone-call.svg";
const EmailIcon = "/assets/icons/email-icon-blue.svg";
const ProfileImg = "/assets/images/demo-profile-img.png";
export default function AboutFirm() {
    return (
        <div className={styles.aboutFirmSection}>
            <div className={styles.aboutFirmBox}>
                <div className={styles.aboutFirmBoxHeading}>
                    <h2>About the Firm</h2>
                </div>
                <div className={styles.aboutFirmBoxBottomAlignment}>
                    <p>The Carlyle Group is a global investment firm with deep industry expertise that deploys private capital across four business segments: Corporate Private Equity, Real Assets, Global Credit, and Investment Solutions. Founded in 1987, Carlyle manages a diverse portfolio that includes companies across various sectors worldwide.</p>
                    <div className={styles.bottomRightAlignment}>
                        <div className={styles.bottomRightFlex}>
                            <div>
                                <img src={MarkerIcon} alt='MarkerIcon' />
                            </div>
                            <p>1001 Pennsylvania Avenue NW,
                                Washington, DC 20004-2505, USA</p>
                        </div>
                        <div className={styles.bottomRightFlex}>
                            <div>
                                <img src={PhoneIcon} alt="PhoneIcon" />
                            </div>
                            <p>+1 (202) 729-5626</p>
                        </div>
                        <div className={styles.bottomRightFlex}>
                            <div>
                                <img src={EmailIcon} alt="EmailIcon" />
                            </div>
                            <p>info@carlyle.com</p>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.aboutFirmBoxHeading, styles.secondTYpe)}>
                    <h2>Key Personnel</h2>
                </div>

                <div className={styles.teamDetailsAlignment}>
                    <div className={styles.teamDetailsGrid}>
                        <div className={styles.teamDetailsGridItem}>
                            <div className={styles.teamDetailsBox}>
                                <div className={styles.teamProfile}>
                                    <img src={ProfileImg} alt="ProfileImg" />
                                </div>

                                <div className={styles.teamNameAlignment}>
                                    <h4>Glenn Youngkin
                                    </h4>
                                    <p>Co-CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamDetailsGridItem}>
                            <div className={styles.teamDetailsBox}>
                                <div className={styles.teamProfile}>
                                    <img src={ProfileImg} alt="ProfileImg" />
                                </div>

                                <div className={styles.teamNameAlignment}>
                                    <h4>Glenn Youngkin
                                    </h4>
                                    <p>Co-CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamDetailsGridItem}>
                            <div className={styles.teamDetailsBox}>
                                <div className={styles.teamProfile}>
                                    <img src={ProfileImg} alt="ProfileImg" />
                                </div>

                                <div className={styles.teamNameAlignment}>
                                    <h4>Glenn Youngkin
                                    </h4>
                                    <p>Co-CEO</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
