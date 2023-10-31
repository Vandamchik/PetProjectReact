import { FC } from 'react';
import { useParams } from "react-router-dom";

import { TitleContent } from "../../UI/Content/TitleContent.tsx";

export const ConfirmEmailPage:FC = () => {
    const { email } = useParams();

    return (
        <TitleContent title='Check your email' >
            <p>{`Go to ${email} and confirm registration for creating account `}</p>
        </TitleContent>
    );
}
