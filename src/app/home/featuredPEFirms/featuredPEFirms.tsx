import React from 'react'
import styles from "./FeaturedPEFirms.module.scss";
const Logo = "/assets/images/logo1.png";
import Slider from "react-slick";
import Image from 'next/image';
import AnimatedSection from '@/component/Animation/AnimatedSection';
export default function FeaturedPEFirms() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
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
        <div className={styles.featuredPEFirmsSection}>
            <div className="container">

                <div className={styles.featuredPEFirmsHeading}>
                    <AnimatedSection animationType="fade-right" duration={600} delay={400} once={""}>
                        <h2>Featured PE <span>Firms</span></h2>
                    </AnimatedSection>
                    <AnimatedSection animationType="fade-left" duration={600} delay={400} once={""}>
                        <div className={styles.findMoreButton}>
                            <button>Find Out MOre</button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
            <div className={styles.siderMainFlexAlignment}>

                <div className={styles.featuredPEFirmsDetailsAlignment}>
                    <Slider {...settings}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => {
                            return (

                                <div className={styles.sliderDetailsAlignment} key={key}>

                                    <div className={styles.featuredPEFirmsDetailsBox}>

                                        <div className={styles.featuredLogo}>
                                            <Image height={0} width={0} unoptimized src={Logo} alt="Logo" />
                                        </div>
                                        <div className={styles.peFirmsBoxListDetails}>
                                            <p>HarbourVest Partners is a private equity fund of funds and one of the largest private equity investment managers globally. </p>
                                        </div>
                                        <div className={styles.peFirmsBottomDetails}>

                                            <div className={styles.bottomNameAllignment}>
                                                <span>Founded</span>
                                                <h6>1982
                                                </h6>
                                            </div>
                                            <div className={styles.bottomNameAllignment}>
                                                <span>Portfolio</span>
                                                <h6>313
                                                </h6>
                                            </div>
                                            <div className={styles.bottomNameAllignment}>
                                                <span>Investment</span>
                                                <h6>$88M+
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
