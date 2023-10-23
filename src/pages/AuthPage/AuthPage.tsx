import React from 'react';
import axios from "axios";
import { redirect } from "react-router-dom";

import style from './AuthPage.module.scss';

import { AuthForm } from '../../components/AuthForm/AuthForm.tsx';
import { ROUTES } from '../../utils/consts.ts';

export const AuthPage:React.FC = () => {
    return (
        <section className={style.sectionAuth}>
            <div className={style.container}>
                <AuthForm />
            </div>
        </section>
    );
};

export async function action({ request }: { request: Request }): Promise<Response> {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');
    await axios.post(`${ROUTES.REGESTRATION_URL}`, {
        email,
        password,
        name,
    })

    return redirect('/');
}
