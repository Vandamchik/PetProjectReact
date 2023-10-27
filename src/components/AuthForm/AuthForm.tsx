import { FormEvent, useEffect, useRef, FC  } from 'react';
import { isEmail, isNotEmpty, hasMinLength } from '../../services/validation.ts';

import styles from './AuthForm.module.scss';

import { BasicInput } from "../../UI/Inputs/BasicInput.tsx";
import { BasicCheckbox } from "../../UI/Inputs/BasicCheckbox.tsx";
import { useInputHook } from "../../hooks/useInputHook.ts";
import { useAppDispatch } from "../../store/storeHooks/redux.ts";
import { fetchRegistrationCreator } from '../../store/reducers/authorization/creator/fetchRegistrationCreator.ts';


export const AuthForm: FC = () => {
    const dispatch = useAppDispatch();
    // const { user, isLogin } = useAppSelector(state => state.authenticationReducer);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const showRef = useRef<HTMLInputElement>(null);
    const {
        value: emailValue,
        handleTextInput: handleEmail,
        handleInputBlur: emailBlur,
        hasError: emailError
    } = useInputHook<string>('', isEmail, isNotEmpty);
    const {
        value: passwordValue,
        handleTextInput: handlePass,
        handleInputBlur: passBlur,
        hasError: passwordError
    } = useInputHook<string>('', isNotEmpty, hasMinLength);
    const {
        value: nameValue,
        handleTextInput: handleName,
        handleInputBlur: nameBlur,
        hasError: nameError
    } = useInputHook('', isNotEmpty);
    const {
        value: isPassShow,
        handleBooleanInput: handleIsShowPass
    } = useInputHook<boolean>(false);


    function formHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatch(fetchRegistrationCreator({email: emailValue,password: passwordValue,name:  nameValue}))
    }

    useEffect(() => {
        emailRef.current!.focus()
    },[]);


    return (
        <form
            className={ styles.formContainer }
            onSubmit={ e => formHandler(e) }
        >
            { emailError && <p>Enter valid email address</p> }
            <BasicInput
                ref={ emailRef }
                id='email'
                name='email'
                type='email'
                value={ emailValue as string }
                setValue={ handleEmail }
                onBlur={ emailBlur }
            />
            { passwordError && <p>Password must contain minimum 6 symbols</p> }
            <BasicInput
                ref={ passwordRef }
                id='passwordReg'
                name='password'
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
            { nameError && <p>Name is required</p> }
            <BasicInput
                ref={ nameRef }
                id='password'
                name='name'
                type='text'
                value={ nameValue as string }
                setValue={ handleName }
                onBlur={ nameBlur }
            />
            <button type='submit' >
                Submit
            </button>
        </form>
    );
};
