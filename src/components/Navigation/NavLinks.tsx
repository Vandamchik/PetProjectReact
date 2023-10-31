import { FC, FormEvent, JSX } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './NavLinks.module.scss';

import { ROUTES } from '../../utils/consts.ts';
import { UserAccountLogo } from '../../UI/logo/UserAccountLogo.tsx';
import { ShoppingCartLogo } from "../../UI/logo/ShoppingCartLogo.tsx";
import { FavoriteIconLogo } from "../../UI/logo/FavoriteIconLogo.tsx";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks/redux.ts";
import { BasicButton } from "../../UI/Buttons/BasicButton.tsx";
import { fetchLogoutCreator } from "../../store/reducers/authorization/creator/fetchLogoutCreator.ts";


export const NavLinks: FC = () => {
    const navigate = useNavigate();
    const { isLogin,isLoading, user } = useAppSelector(state => state.authenticationReducer);
    const dispatch = useAppDispatch();


    const isHaveAccount = !!(isLogin && user?.user?.email);
    let loginOutButton: JSX.Element;

    function btnHandler(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch(fetchLogoutCreator())
    }

    function redirectToLogin(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault()
        navigate(ROUTES.AUTH_PAGE)
    }

    if (isHaveAccount) {
        loginOutButton = <BasicButton
            titleMain="Login"
            titleFalse="Logout"
            pending={  isLoading }
            btnHandler={ btnHandler }
            isLogin={ isHaveAccount }
        />
    } else {
        loginOutButton = <BasicButton
            titleMain="Login"
            titleFalse="Logout"
            btnHandler={ redirectToLogin }
            isLogin={ isHaveAccount }
        />
    }


    return (
        <ul className={ styles.container }>
            <li>
                <NavLink
                    to={ ROUTES.HOME_PAGE }
                    className={ ({ isActive })  =>
                        isActive ? styles.active : undefined
                    }
                    end
                >Home Page</NavLink>
            </li>
            <li>
                <div className={styles.icons_container}>
                    {  isHaveAccount &&
                        (
                            <NavLink
                            to={ ROUTES.FAVORITES_PAGE }
                            className={ ({ isActive })  =>
                            isActive ? styles.active : undefined
                            }
                        >
                            <FavoriteIconLogo />
                        </NavLink>
                        )
                    }
                    <NavLink
                        to={ ROUTES.SHOPPING_CART_PAGE }
                        className={ ({ isActive })  =>
                            isActive ? styles.active : undefined
                        }
                    >
                        <ShoppingCartLogo />
                    </NavLink>
                    <NavLink
                        to={ ROUTES.AUTH_PAGE }
                        className={ ({ isActive })  =>
                            isActive ? styles.active : undefined
                        }
                    >
                        <UserAccountLogo />
                    </NavLink>
                </div>
            </li>
            <li>
                { loginOutButton }
            </li>
        </ul>
    );
};
