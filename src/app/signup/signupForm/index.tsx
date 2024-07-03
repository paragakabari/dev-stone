import React, { useEffect, useState } from 'react'
import styles from "./signupForm.module.scss";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorCheckAPIResponse, successAPIResponse } from '@/utils/helpers';
import { signIn, useSession } from 'next-auth/react';
import { axiosInstance } from '@/api/base';
import { setToken, setUserInfo } from '@/utils/auth.util';
import { useRouter } from 'next/navigation';
import Loader from "../../../component/loader";
import Image from 'next/image';

const MailIcon = "/assets/icons/mail-icon.svg";
const SendLinkIcon = "/assets/icons/send-link-icon.svg";
const GoogleIcon = "/assets/icons/google-icon.svg";
const UserIcon = "/assets/icons/user-icon.svg";
const Logo = "/assets/logo/logo.svg";

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required.'),
    last_name: Yup.string().required('Lat Name is required.'),
    email: Yup.string().email('Please enter a valid email address').required('Email address is required.'),
});
export default function SignupForm() {
    const router = useRouter();
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            first_name: '',
            last_name: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setIsLoading(true)
            axiosInstance
                .post(`auth/user/register`, values)
                .then((res) => {
                    successAPIResponse(res)
                    const body = { ...values, base_url: window.location.origin };
                    axiosInstance
                        .post(`auth/send_magic_link`, body)
                        .then((res) => {
                            router.push('/magic')
                            successAPIResponse(res)
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            errorCheckAPIResponse(error);
                            setIsLoading(false)
                        });
                })
                .catch((error) => {
                    errorCheckAPIResponse(error);
                    setIsLoading(false)
                });
        },
    });

    const handlegoogleSignup = async () => {
        signIn("google");
    };

    useEffect(() => {
        if (session) {
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
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.signUpFormSection}>
                {isLoading && (
                    <Loader />
                )}
                <div className={styles.mobileViewLogo}>
                    <Image unoptimized height={0} width={0} src={Logo} alt='Logo' />
                </div>
                <div className={styles.signUpFormAlignment}>
                    <h1>Sign Up</h1>
                    <p>Enter your details below to create your account
                        and get started</p>

                    <div className={styles.inputDetailsAlignment}>
                        <div className={styles.inputAlignment}>

                            <div className={styles.input}>
                                <Image unoptimized height={0} width={0} src={UserIcon} alt="UserIcon" />
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    name='first_name'
                                    onChange={formik.handleChange}
                                    value={formik.values.first_name}
                                    onBlur={formik.handleBlur} />
                            </div>
                            {formik?.errors.first_name && formik?.touched.first_name ? <div className={styles.errorMsg}>{formik?.errors.first_name}</div> : null}
                        </div>
                        <div className={styles.inputAlignment}>

                            <div className={styles.input}>
                                <Image unoptimized height={0} width={0} src={UserIcon} alt="UserIcon" />
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    name='last_name'
                                    onChange={formik.handleChange}
                                    value={formik.values.last_name}
                                    onBlur={formik.handleBlur} />
                            </div>
                            {formik?.errors.last_name && formik?.touched.last_name ? <div className={styles.errorMsg}>{formik?.errors.last_name}</div> : null}
                        </div>
                        <div className={styles.inputAlignment}>
                            <div className={styles.input}>
                                <Image unoptimized height={0} width={0} src={MailIcon} alt="MailIcon" />
                                <input
                                    type='text'
                                    name="email"
                                    placeholder='Email Address'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik?.errors.email && formik?.touched.email ? <div className={styles.errorMsg}>{formik?.errors.email}</div> : null}
                        </div>
                    </div>

                    <div className={styles.buttonAlignment}>
                        <div className={styles.buttonDetails}>
                            <button type='submit'><Image unoptimized height={0} width={0} src={SendLinkIcon} alt="send link icon" />Send Magic Link</button>
                        </div>
                        <div className={styles.buttonDetails}>
                            <button className={styles.outlineBtn} onClick={handlegoogleSignup}><Image unoptimized height={0} width={0} src={GoogleIcon} alt="google icon" />Sign in with Google</button>
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
        </form>

    )
}
