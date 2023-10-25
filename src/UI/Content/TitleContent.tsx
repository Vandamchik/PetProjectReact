import  { FC, HTMLAttributes } from 'react';

import styles from './TitleContent.module.scss';

interface ITextContent extends HTMLAttributes<HTMLDivElement> {
    title: string
}
export const TitleContent: FC<ITextContent> = ({children, title}) => {

    return (
        <div className={ styles.content }>
            <h1 style={{ fontSize: '40px' }}>{ title }</h1>
            { children }
        </div>
    );
};
