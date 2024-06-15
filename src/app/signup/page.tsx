"use client"
import styles from "./signup.module.scss";
import SignUpSide from "./signupSide/signupSide";
export default function Signup() {
    return (
        <div className={styles.signupSection}>
            <SignUpSide />
        </div>
    )
}