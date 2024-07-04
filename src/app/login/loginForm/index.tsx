import React, { useEffect, useState } from 'react'
import styles from "./loginForm.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn, useSession } from "next-auth/react";
import { setToken, setUserInfo } from "@/utils/auth.util";
import { axiosInstance } from "@/api/base";
import { errorCheckAPIResponse, successAPIResponse } from "@/utils/helpers";
import Loader from '@/component/loader';
const MailIcon = "/assets/icons/mail-icon.svg";
const SendLinkIcon = "/assets/icons/send-link-icon.svg";
const GoogleIcon = "/assets/icons/google-icon.svg";
const Logo = "/assets/logo/logo.svg";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required('Email address is required.'),
});
export default function LoginForm() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setIsLoading(true)
            const body = { ...values, base_url: window.location.origin };
            axiosInstance
                .post(`auth/send_magic_link`, body)
                .then((res) => {
                    successAPIResponse(res);
                    //   setIsMagicLink(true);
                    router.push('/magic')
                    setIsLoading(false)
                })
                .catch((error) => {
                    errorCheckAPIResponse(error);
                    setIsLoading(false)
                });
        },
    });
    const router = useRouter();
    useEffect(() => {
        if (session && Object.keys(session).length > 0) {
            setIsLoading(true)
            const fullname = session?.user?.name;
            const body = {
                email: session?.user?.email,
                first_name: fullname.split(" ")[0],
                last_name: fullname.split(" ")[1],
            };
            axiosInstance
                .post(`/auth/authorize`, body)
                .then((res) => {
                    setToken(res.data.access_token);
                    setUserInfo(res.data.data);
                    router.push(`/dashboard`);
                    setIsLoading(false)
                })
                .catch((error) => {
                    errorCheckAPIResponse(error);
                    setIsLoading(false)
                });
        }
    }, [session]);

    const handleGoogleSignIn = async () => {
        signIn("google");
    };
    const handleClickSendMegiclink = () => {
        formik.handleSubmit()
    }
    return (
        <div className={styles.loginFormSection}>
            {isLoading && (
                <Loader />
            )}
            <div className={styles.mobileViewLogo}
                onClick={() => {
                    router.push(`/`);
                }}
            >
                <Image unoptimized height={0} width={0} src={Logo} alt='Logo' />
            </div>
            <div className={styles.loginFormAlignment}>
                <h1>Welcome Back!</h1>
                <p>Glad to see you again.
                    Login to your account below</p>

                <div className={styles.inputDetailsAlignment}>
                    <div className={styles.input}>
                        <Image unoptimized height={0} width={0} src={MailIcon} alt="MailIcon" />
                        <input type='text' name="email" placeholder='Email Address'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik?.errors.email && formik?.touched.email ? <div className={styles.errorMsg}>{formik?.errors.email}</div> : null}
                </div>

                <div className={styles.buttonAlignment}>
                    <div className={styles.buttonDetails}>
                        <button type="submit" onClick={handleClickSendMegiclink}><Image unoptimized height={0} width={0} src={SendLinkIcon} alt='a' />Send Magic Link</button>
                    </div>
                    <div className={styles.buttonDetails} onClick={() => handleGoogleSignIn()}>
                        <button className={styles.outlineBtn}><Image unoptimized height={0} width={0} src={GoogleIcon} alt='2' />Sign in with Google</button>
                    </div>
                </div>

                <div className={styles.dontAccountAlignment}>
                    <a

                    >Don{"'"}t have an account?

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
