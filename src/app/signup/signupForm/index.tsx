import React from 'react'
import styles from "./signupForm.module.scss";

import Link from 'next/link';
const MailIcon = "/assets/icons/mail-icon.svg";
const SendLinkIcon = "/assets/icons/send-link-icon.svg";
const GoogleIcon = "/assets/icons/google-icon.svg";
const UserIcon = "/assets/icons/user-icon.svg";
export default function SignupForm() {
    return (
        <div className={styles.signUpFormSection}>
            <div className={styles.signUpFormAlignment}>
                <h1>Sign Up</h1>
                <p>Enter your details below to create your account
                    and get started</p>

                <div className={styles.inputDetailsAlignment}>
                    <div className={styles.inputAlignment}>

                        <div className={styles.input}>
                            <img src={UserIcon} alt="UserIcon" />
                            <input type='text' placeholder='Your Name' />
                        </div>
                    </div>
                    <div className={styles.inputAlignment}>
                        <div className={styles.input}>
                            <img src={MailIcon} alt="MailIcon" />
                            <input type='text' placeholder='Email Address' />
                        </div>
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

                <div className={styles.alreadtAccountAlignment}>
                    <a>Already have an account?   </a><Link href="/login"> <span>Login</span>
                    </Link>
                </div>
            </div>
            <div className={styles.copyRightALignment}>
                <p>© 2024 Stone-Goff Partners. All Rights Reserved.</p>
            </div>
        </div>
    )
}
