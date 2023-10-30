import { FC, HTMLAttributes } from 'react';

import styles from './SubmitFormButton.module.scss';

interface ISubmitFormButton extends HTMLAttributes<HTMLButtonElement> {
    title: string;
    loadingTitle: string;
    pending: boolean;
}
export const SubmitFormButton: FC<ISubmitFormButton> = ({ title, pending, loadingTitle}) => {
    return (
        <button
            type='submit'
            className={ styles.submitForm__btn }
        >
            { !pending ? title : loadingTitle}
        </button>
    );
}
