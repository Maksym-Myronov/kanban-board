'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GoogleButton from 'react-google-button';
import { signIn, useSession } from 'next-auth/react';
import { Route as RouteEnum } from '@/core/enum/index';

import s from './index.module.scss';

const SignUp = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) {
            router.push(RouteEnum.Main);
        }
    }, [session, router]);

    const handleGoogleSignUp = () => {
        signIn('google', { callbackUrl: RouteEnum.Main });
    };

    return (
        <div className={s['signup']}>
            <form className={s['signup__form']}>
                <h2 className={s['signup__title']}>Create account</h2>
                <input type="text" placeholder="username" className={s['signup__input']} />
                <input type="email" placeholder="email" className={s['signup__input']} />
                <input type="password" placeholder="password" className={s['signup__input']} />
                <button type="submit" className={s['signup__button']}>
                    Sign up
                </button>
                <GoogleButton
                    onClick={handleGoogleSignUp}
                    className={s['signup__button--google']}
                />
                <p className={s['signup__text']}>
                    Already have an account
                    <span
                        className={s['signup__link']}
                        onClick={() => router.push(RouteEnum.Login)}
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
