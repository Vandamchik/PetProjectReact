import { FC, JSX } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinks.module.scss';

import { ROUTES } from '../../utils/consts.ts';
import { UserAccountLogo } from '../../UI/logo/UserAccountLogo.tsx';
import { ShoppingCartLogo } from "../../UI/logo/ShoppingCartLogo.tsx";
import { FavoriteIconLogo } from "../../UI/logo/FavoriteIconLogo.tsx";
import { useAppSelector } from "../../store/storeHooks/redux.ts";


export const NavLinks: FC = () => {
    const { isLogin, user } = useAppSelector(state => state.authenticationReducer);

    let authenticatedUserOptions: JSX.Element;

    if (isLogin && user.user.email) {
       authenticatedUserOptions = (<>
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
                    <NavLink
                        to={ ROUTES.FAVORITES_PAGE }
                        className={ ({ isActive })  =>
                            isActive ? styles.active : undefined
                        }
                    >
                        <FavoriteIconLogo />
                    </NavLink>
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
        </>)
    } else {
        authenticatedUserOptions = (<>
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
        </>)
    }

    return (
        <ul className={ styles.container }>
            { authenticatedUserOptions }
        </ul>
    );
};
