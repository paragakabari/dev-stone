import React from 'react'
import styles from "./loginForm.module.scss";
import Link from 'next/link';
const MailIcon = "/assets/icons/mail-icon.svg";
const SendLinkIcon = "/assets/icons/send-link-icon.svg";
const GoogleIcon = "/assets/icons/google-icon.svg";
export default function LoginForm() {
    return (
        <div className={styles.loginFormSection}>
            <div className={styles.loginFormAlignment}>
                <h1>Welcome Back!</h1>
                <p>Glad to see you again.
                    Login to your account below</p>

                <div className={styles.inputDetailsAlignment}>
                    <div className={styles.input}>
                        <img src={MailIcon} alt="MailIcon" />
                        <input type='text' placeholder='Email Address' />
                    </div>
                </div>

                <div className={styles.buttonAlignment}>
                    <div className={styles.buttonDetails}>
                        <button><img src={SendLinkIcon} />Send Magic Link</button>
                    </div>
                    <div className={styles.buttonDetails}>
                        <button className={styles.outlineBtn}><img src={GoogleIcon} />Sign in with Google</button>
                    </div>
                </div>

                <div className={styles.dontAccountAlignment}>
                    <a>Don't have an account?

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
