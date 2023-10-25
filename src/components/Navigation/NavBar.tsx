import { FC, HTMLAttributes } from 'react';


interface INavBar extends HTMLAttributes<HTMLElement> {}

export const NavBar: FC<INavBar> = ({ children,className }) => {

    return <nav className={ className }>{ children }</nav>
};
