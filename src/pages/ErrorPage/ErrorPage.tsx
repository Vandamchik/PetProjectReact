import { FC } from 'react';
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import { MainNavigation } from "../../components/Navigation/MainNavigation.tsx";
import { TitleContent } from "../../UI/Content/TitleContent.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";

import styles from './ErrorPage.module.scss';
import { TError } from "./errorModules.ts";

export const ErrorPage: FC = () => {
    const error: TError = useRouteError();
    let errorTitle = "ErrorPage occurred!";
    let errorMessage = "Something goes wrong";


    if (isRouteErrorResponse(error)) {
        if (error.status >= 400) {
            errorTitle = "Page not found";
            errorMessage = "This page is not exist";
        }
        if (error.status >= 500) {
            errorMessage = error.data;
        }
    }

    return (
        <>
            <MainNavigation />
            <main className={ styles.main }>
                <TitleContent title={ errorTitle }>
                    <p style={{ fontSize: "25px" }}>{ errorMessage }</p>
                </TitleContent>
            </main>
            <Footer />
        </>
    );
};
