import React from 'react';

import styles from './Footer.module.scss';


export const Footer:React.FC = () => {
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
