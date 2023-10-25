import { FC, HTMLAttributes } from 'react';


interface IMainHeader extends HTMLAttributes<HTMLElement> {}

export const MainHeader: FC<IMainHeader> = ({ children,className }) => {

    return <header className={ className }>{ children }</header>;
};
