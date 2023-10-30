import { FC, FormEvent } from 'react';
import { useAppDispatch } from "../../store/storeHooks/redux.ts";

import style from './AuthPage.module.scss';

import { LogInForm } from "../../components/AuthForm/logInForm.tsx";
import { AuthForm } from '../../components/AuthForm/AuthForm.tsx';
import { fetchLogoutCreator } from '../../store/reducers/authorization/creator/fetchLogoutCreator.ts';


export const AuthPage: FC = () => {
    const dispatch = useAppDispatch();
    // const { user } = useAppSelector(state => state.authenticationReducer);
    function btnHandler(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log('logout')
        dispatch(fetchLogoutCreator())

    }

    return (
        <section className={style.sectionAuth}>
            <div className={style.container}>
                <AuthForm />
                < hr />
                <LogInForm />
                <button onClick={ btnHandler } type='button'>
                    Logout
                </button>
            </div>
        </section>
    );
};
