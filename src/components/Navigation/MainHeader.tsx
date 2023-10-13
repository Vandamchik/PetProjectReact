import React, { HTMLAttributes } from 'react';


interface IMainHeader extends HTMLAttributes<HTMLElement> {}

export const MainHeader:React.FC<IMainHeader> = ({ children,className }) => {

    return <header className={ className }>{ children }</header>;
};
