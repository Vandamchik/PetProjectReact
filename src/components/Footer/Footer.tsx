import { FC } from 'react';

import styles from './Footer.module.scss';


export const Footer: FC = () => {
    return (
        <footer className={ styles.container }>
            <div className={ styles.cells }>
                Contacts
            </div>
            <div className={ styles.cells }>
                Social media
            </div>
        </footer>
    );
};
