"use client"

import { useRouter } from "next/navigation"
import styles from "./login.module.scss";
import LoginSide from "./loginSide/loginSide";
import LoginForm from "./loginForm";
import Image from "next/image";
const Logo = "/assets/logo/logo.svg";
const SendLinkIcon = "/assets/icons/send-link-icon.svg";
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