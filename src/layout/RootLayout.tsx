import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainNavigation } from "../components/Navigation/MainNavigation.tsx";
import { Footer } from "../components/Footer/Footer.tsx";


export const RootLayout: React.FC = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
