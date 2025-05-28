'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import s from './index.module.scss';

const Login = () => {
    const router = useRouter();

    const handleGoogleSignUp = () => {};

    return (
        <div className={s['signup']}>
            <form className={s['signup__form']}>
                <h2 className={s['signup__title']}>Login in account</h2>
                <input type="text" placeholder="username" className={s['signup__input']} />
                <input type="password" placeholder="password" className={s['signup__input']} />
                <button type="submit" className={s['signup__button']}>
                    Login
                </button>
                <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className={s['signup__button--google']}
                >
                    Login with Google
                </button>
                <p className={s['signup__text']}>
                    Don't have account yet?
                    <span className={s['signup__link']} onClick={() => router.push('/')}>
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
