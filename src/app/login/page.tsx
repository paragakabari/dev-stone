"use client"

import { useRouter } from "next/navigation"
import styles from "./login.module.scss";
import LoginSide from "./loginSide/loginSide";
import LoginForm from "./loginForm";
export default function Login() {
    const router = useRouter();
    return (
        <>
            <div className={styles.loginSection}>
                <LoginSide />
                <LoginForm />
            </div>
        </>
    )
}