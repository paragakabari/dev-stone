import React from 'react'
import styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import Image from 'next/image';
const ProfileImg = "/assets/images/testimal-profile-img.png";
export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
        <div className={styles.testimonialsSection}>
            <div className="container">
                <div className={styles.testimonialsAlignment}>
                    <div className={styles.testimonialsHeading}>
                        <h2>Testimonials</h2>
                    </div>
                </div>
            </div>

            <div className={styles.testimalDetailsAlignment}>
                <Slider {...settings}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => {
                        return (

                            <div className={styles.sliderDetailsAlignment} key={key}>

                                <div className={styles.testimalDetailsBox}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="46" viewBox="0 0 70 46" fill="none">
                                            <path d="M36.5672 0L24.7264 46H0L18.6318 0H36.5672ZM70 0L58.1592 46H33.4328L52.0647 0H70Z" fill="#1D63DC" />
                                        </svg>
                                        <h6>Streamlined decision-making</h6>
                                        <p>“PE Aggregator has been a game-changer for our investment research. With its comprehensive data and intuitive interface, we are able to quickly grasp industry trends and identify promising opportunities. The platforms advanced scoring system helps us focus on high-potential sectors and streamline our decision-making process effectively.”</p>
                                        <div className={styles.testimalProfile}>
                                            <div className={styles.testimalProfileImg}>

                                                <Image
                                                    unoptimized
                                                    height={0}
                                                    width={0} src={ProfileImg} alt="ProfileImg" />
                                            </div>
                                            <h6>Cameron <span>Williamson</span></h6>
                                            <p>MAY 2024</p>
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
