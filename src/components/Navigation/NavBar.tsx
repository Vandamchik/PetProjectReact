import React, { HTMLAttributes } from 'react';

interface INavBar extends HTMLAttributes<HTMLElement> {}


export const NavBar:React.FC<INavBar> = ({ children,className }) => {

    return <nav className={ className }>{ children }</nav>
};
