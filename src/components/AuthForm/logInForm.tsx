import { FC, FormEvent, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './BasicFormStyles.module.scss';

import { useAppDispatch, useAppSelector } from "../../store/storeHooks/redux.ts";
import { fetchLoginCreator } from '../../store/reducers/authorization/creator/fetchLoginCreator.ts';
import { BasicInput } from "../../UI/Inputs/BasicInput.tsx";
import { BasicCheckbox } from "../../UI/Inputs/BasicCheckbox.tsx";
import { useInputHook } from "../../hooks/useInputHook.ts";
import { isNotEmpty, hasMinLength, isEmail } from "../../services/validation/validation.ts";
import { SubmitFormButton } from "../../UI/Buttons/SubmitFormButton.tsx";


export const LogInForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {  isLoading } = useAppSelector(state => state.authenticationReducer);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const showRef = useRef<HTMLInputElement>(null);
    const {
        value: emailValue,
        handleTextInput: handleEmail,
        handleInputBlur: emailBlur,
        hasError: emailError,
        setEnteredValue: setEmailValue
    } = useInputHook('', isNotEmpty, isEmail);
    const {
        value: passwordValue,
        handleTextInput: handlePass,
        handleInputBlur: passBlur,
        hasError: passwordError,
        setEnteredValue: setPasswordValue
    } = useInputHook<string>('', isNotEmpty, hasMinLength);
    const {
        value: isPassShow,
        handleBooleanInput: handleIsShowPass
    } = useInputHook<boolean>(false);

    function formHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(fetchLoginCreator({ email: emailValue, password: passwordValue }));
        setPasswordValue('');
        setEmailValue('');
        navigate('/', { replace: true })
    }

    useEffect(() => {
        emailRef.current!.focus()
    },[]);


    return (
        <form
            onSubmit={ formHandler }
            className={ styles.formContainer }
        >
            <BasicInput
                ref={ emailRef }
                id='email'
                name='email'
                type='email'
                inputError={ emailError }
                inputErrorMessage='Enter valid e-mail address'
                value={ emailValue as string }
                setValue={ handleEmail }
                onBlur={ emailBlur }
            />
            <BasicInput
                ref={ passwordRef }
                id='passwordReg'
                name='password'
                inputErrorMessage='Password must contain minimum 6 symbols'
                inputError={ passwordError }
                type={ isPassShow ? 'text' : 'password' }
                value={ passwordValue as string }
                setValue={ handlePass }
                onBlur={ passBlur }
            />
            <BasicCheckbox
                title='Show Password'
                id='showPassword'
                ref={ showRef }
                name='showPassword'
                value={`${isPassShow}`}
                setValue={ () => handleIsShowPass() }
            />
            <SubmitFormButton
                pending={ isLoading }
                className={ styles.submitForm__btn }
                title="Login"
                loadingTitle='Submitting...'
            />
        </form>
    );
};
