"use client"
import styles from "./signup.module.scss";
import SignupForm from "./signupForm";
import SignUpSide from "./signupSide/signupSide";
export default function Signup() {
    return (
        <div className={styles.signupSection}>
            <SignUpSide />
            <SignupForm />
        </div>
    )
}