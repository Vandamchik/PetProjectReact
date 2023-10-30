import { FC } from 'react';

import { MainHeader } from './MainHeader.tsx';
import { NavBar } from "./NavBar.tsx";
import { NavLinks } from "./NavLinks.tsx";
import { SwMainLogo } from "../../UI/logo/SWMainLogo.tsx";

import styles from './MainNavigation.module.scss';


export const MainNavigation: FC = () => {
    return (
        <>
            <MainHeader className={ styles.header }>
                <SwMainLogo />
                <NavBar className={ styles.nav }>
                    <NavLinks />
                </NavBar>
            </MainHeader>
        </>
    );
};
