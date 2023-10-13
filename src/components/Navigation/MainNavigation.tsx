import React from 'react';

import { MainHeader } from './MainHeader.tsx';
import { NavBar } from "./NavBar.tsx";
import { NavLinks } from "./NavLinks.tsx";

import styles from './MainNavigation.module.scss';


export const MainNavigation:React.FC = () => {
    return (
        <>
            <MainHeader className={ styles.header }>
                <NavBar className={ styles.nav }>
                    <NavLinks />
                </NavBar>
            </MainHeader>
        </>
    );
};