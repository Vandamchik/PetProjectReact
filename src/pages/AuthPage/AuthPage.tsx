import { FC } from 'react';

import style from './AuthPage.module.scss';

import { AuthForm } from '../../components/AuthForm/AuthForm.tsx';


export const AuthPage: FC = () => {
    return (
        <section className={style.sectionAuth}>
            <div className={style.container}>
                <AuthForm />
            </div>
        </section>
    );
};
