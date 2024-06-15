import React from 'react'
import styles from "./loginForm.module.scss";
import Link from 'next/link';
import Image from 'next/image';
const MailIcon = "/assets/icons/mail-icon.svg";
const SendLinkIcon = "/assets/icons/send-link-icon.svg";
const GoogleIcon = "/assets/icons/google-icon.svg";
const Logo = "/assets/logo/logo.svg";
export default function LoginForm() {
    return (
        <div className={styles.loginFormSection}>
            <div className={styles.mobileViewLogo}>
                <Image unoptimized height={0} width={0} src={Logo} alt='Logo' />
            </div>
            <div className={styles.loginFormAlignment}>
                <h1>Welcome Back!</h1>
                <p>Glad to see you again.
                    Login to your account below</p>

                <div className={styles.inputDetailsAlignment}>
                    <div className={styles.input}>
                        <Image unoptimized height={0} width={0} src={MailIcon} alt="MailIcon" />
                        <input type='text' placeholder='Email Address' />
                    </div>
                </div>

                <div className={styles.buttonAlignment}>
                    <div className={styles.buttonDetails}>
                        <button><Image unoptimized height={0} width={0} src={SendLinkIcon} alt='a' />Send Magic Link</button>
                    </div>
                    <div className={styles.buttonDetails}>
                        <button className={styles.outlineBtn}><Image unoptimized height={0} width={0} src={GoogleIcon} alt='2' />Sign in with Google</button>
                    </div>
                </div>

                <div className={styles.dontAccountAlignment}>
                    <a>Don{"'"}t have an account?

                    </a><Link href="/signup"> <span>Sign up</span>
                    </Link>
                </div>
            </div>
            <div className={styles.copyRightALignment}>
                <p>© 2024 Stone-Goff Partners. All Rights Reserved.</p>
            </div>
        </div>
    )
}
