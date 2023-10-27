import { FC, FormEvent, useState } from 'react';

import { useAppDispatch } from "../../store/storeHooks/redux.ts";
import { fetchLoginCreator } from '../../store/reducers/authorization/creator/fetchLoginCreator.ts';

export const LogInForm: FC = () => {
    const dispatch = useAppDispatch();
    // const { user, isLogin } = useAppSelector(state => state.authenticationReducer);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function formHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch(fetchLoginCreator({email, password}))
    }


    return (
        <form onSubmit={ formHandler }>
            <input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
                id='pass'
                name='pass'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button type='submit'>
                Submit
            </button>
        </form>
    );
};
