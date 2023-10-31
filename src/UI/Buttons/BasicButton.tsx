import { FC, HTMLAttributes, MouseEvent } from 'react';

import styles from './BasicButton.module.scss';

interface IBasicButton extends HTMLAttributes<HTMLButtonElement> {
    btnHandler: (e: MouseEvent<HTMLButtonElement>) => void;
    pending?: boolean;
    isLogin? : boolean;
    titleMain?: string;
    titleFalse?: string;
}

export const BasicButton: FC<IBasicButton> = (props) => {
const { btnHandler, pending , isLogin, titleMain,titleFalse  } = props;

    return (
        <button
            type='button'
            disabled={ pending }
            className={ styles.basicBtn }
            onClick={ (e) => btnHandler(e) }
        >
            { !isLogin ? titleMain : titleFalse }
        </button>
    );
}
