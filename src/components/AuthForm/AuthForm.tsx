import React, { useEffect, useRef, useState } from 'react';
import { useFetcher } from "react-router-dom";

import styles from './AuthForm.module.scss';

import { BasicInput } from "../../UI/BasicInput.tsx";

export const AuthForm: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const [isPassShow, setIsPassShow]  = useState<boolean>(false);
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [nameInput, setNameInput] = useState<string>('');
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    console.log('AuthFormComp', data)

    useEffect(() => {
        emailRef.current!.focus()
    },[]);


    return (
        <fetcher.Form
            className={ styles.formContainer }
            method='post'
            action='/auth'
        >
            <BasicInput
                ref={ emailRef }
                id='email'
                name='email'
                type='email'
                value={ emailInput }
                setValue={ setEmailInput }
            />
            <BasicInput
                ref={ passwordRef }
                id='password'
                name='password'
                type={ isPassShow ? 'text' : 'password' }
                value={ passwordInput }
                setValue={ setPasswordInput }
            />
            <label htmlFor='showPassword'>Show password</label>
            <input
                type='checkbox'
                id='showPassword'
                name='showPassword'
                value={`${isPassShow}`}
                onChange={() => setIsPassShow(prevState => !prevState)}
            />
            <BasicInput
                ref={ nameRef }
                id='password'
                name='name'
                type='text'
                value={ nameInput }
                setValue={ setNameInput }
            />
            <button type='submit' >
                {state === 'submitting' ? 'Submitting' : 'Create an account'}
            </button>
        </fetcher.Form>
    );
};
