import { FormEvent, useEffect, useRef, FC  } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './BasicFormStyles.module.scss';

import { BasicInput } from "../../UI/Inputs/BasicInput.tsx";
import { BasicCheckbox } from "../../UI/Inputs/BasicCheckbox.tsx";
import { useInputHook } from "../../hooks/useInputHook.ts";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks/redux.ts";
import { fetchRegistrationCreator } from '../../store/reducers/authorization/creator/fetchRegistrationCreator.ts';
import { SubmitFormButton } from "../../UI/Buttons/SubmitFormButton.tsx";
import { isEmail, isNotEmpty, hasMinLength } from '../../services/validation/validation.ts';


export const RegistrationForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isLoading  } = useAppSelector(state => state.authenticationReducer);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const showRef = useRef<HTMLInputElement>(null);
    const {
        value: emailValue,
        handleTextInput: handleEmail,
        handleInputBlur: emailBlur,
        hasError: emailError,
        setEnteredValue: setEmailValue
    } = useInputHook<string>('', isEmail, isNotEmpty);
    const {
        value: passwordValue,
        handleTextInput: handlePass,
        handleInputBlur: passBlur,
        hasError: passwordError,
        setEnteredValue: setPasswordValue
    } = useInputHook<string>('', isNotEmpty, hasMinLength);
    const {
        value: nameValue,
        handleTextInput: handleName,
        handleInputBlur: nameBlur,
        hasError: nameError,
        setEnteredValue: setNameValue
    } = useInputHook('', isNotEmpty);
    const {
        value: isPassShow,
        handleBooleanInput: handleIsShowPass
    } = useInputHook<boolean>(false);


    function formHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(fetchRegistrationCreator({email: emailValue,password: passwordValue,name:  nameValue}));
        navigate(`/confirm-registration/${emailValue}` , { replace: true });
        setEmailValue('');
        setPasswordValue('');
        setNameValue('');
    }

    useEffect(() => {
        emailRef.current!.focus()
    },[]);


    return (
        <form
            className={ styles.formContainer }
            onSubmit={ e => formHandler(e) }
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
            <BasicInput
                ref={ nameRef }
                id='password'
                name='name'
                inputErrorMessage='Name is required'
                inputError={ nameError }
                type='text'
                value={ nameValue as string }
                setValue={ handleName }
                onBlur={ nameBlur }
            />
            <SubmitFormButton
                pending={ isLoading }
                title="Submit"
                loadingTitle='Submitting...'
            />
        </form>
    );
};
