import { FC } from 'react';
import { NavLink, Outlet } from "react-router-dom";

import style from './AuthPage.module.scss';


export const AuthPage: FC = () => {

    return (
        <section className={ style.sectionAuth }>
            <div className={ style.container }>
                <div className={ style.btnContainer }>
                    <NavLink
                        to={'/auth'}
                        className={ ({ isActive })  =>
                            isActive ? style.active : undefined
                        }
                        end
                    >Login</NavLink>
                    <NavLink
                        to={'/auth/registration'}
                        className={ ({ isActive })  =>
                            isActive ? style.active : undefined
                        }
                    >Registration</NavLink>
                </div>
                < Outlet />
            </div>
        </section>
    );
};
