import React from 'react'
import styles from "./recentNews.module.scss";
import Slider from "react-slick";
import Image from 'next/image';
const NewsImg = "/assets/images/news-img.png";
const LinkBtn = "/assets/icons/link-btn.svg";

export default function RecentNews() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.recentNewsSection}>
            <div className="container">

                <div className={styles.recentNewsHeading}>
                    <h2>Recent  <span>News</span></h2>

                    <div className={styles.findMoreButton}>
                        <button>Find Out MOre</button>
                    </div>
                </div>
            </div>

            <div className={styles.recentNewsDetailsAlignment}>
                <Slider {...settings}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                        return (

                            <div className={styles.sliderDetailsAlignment} key={index}>

                                <div className={styles.recentNewsDetailsBox}>

                                    <div className={styles.recentNewsDetailsImg}>
                                        <Image
                                            unoptimized
                                            height={0}
                                            width={0} src={NewsImg} alt="NewsImg" />
                                    </div>
                                    <div className={styles.recentNewsBottom}>
                                        <div className={styles.topTImeDetails}>
                                            <h6>15 MAY 2024</h6>
                                            <p></p>
                                            <h6 className={styles.trendSection}>Trends</h6>
                                        </div>
                                        <div className={styles.descriptionList}>
                                            <span>Exploring The Latest
                                                Trends in Private Equity
                                                Investments</span>
                                        </div>
                                        <div className={styles.linkBtm}>
                                            <Image
                                                unoptimized
                                                height={0}
                                                width={0} src={LinkBtn} alt="LinkBtn" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
