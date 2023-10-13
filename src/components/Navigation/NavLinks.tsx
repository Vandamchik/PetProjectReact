import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavLinks.module.scss';


export const NavLinks:React.FC = () => {

    return (
        <ul className={ styles.container }>
            <li>
                <NavLink
                    to='/'
                    className={ ({ isActive })  =>
                        isActive ? styles.active : undefined
                    }
                    end
                >Home Page</NavLink>
            </li>
            <li>
                <NavLink
                    to='favorites'
                    className={ ({ isActive })  =>
                        isActive ? styles.active : undefined
                    }
                >Favorites</NavLink>
            </li>
            <li>
                <NavLink
                    to='auth'
                    className={ ({ isActive })  =>
                        isActive ? styles.active : undefined
                    }
                >Authenticate</NavLink>
            </li>
        </ul>
    );
};
