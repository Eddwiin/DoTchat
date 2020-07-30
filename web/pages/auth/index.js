import React, { lazy } from 'react';
import Head from 'next/head';
import style from './index.module.scss';
import { Layout } from '../../shared';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import APP_ROUTES from '../../configs/routes';

const SignIn = dynamic(() => import('./sign-in'))
const ForgetPassword = dynamic(() => import('./forget-password'))
const ResetPassword = dynamic(() => import('./reset-password'))
const SignUp = dynamic(() => import('./sign-up'));

export default function AuthIndexPage() {

    const router = useRouter();

    return (
        <div className={style.auth}>
            <Head>
                <title>DoTchat - Auth</title>
            </Head>
            <div className={style.auth__content}>
                <h1 className={style.auth__content__title}>
                    <span className={style.auth__content__title_main}>DotChat</span>
                    <span className={style.auth__content__title_sub}>
                        Communicate with the world
                     </span>
                </h1>
            </div>

            <div className={style.auth__layout}>
                <Layout>
                </Layout>
            </div>
        </div>
    )
}