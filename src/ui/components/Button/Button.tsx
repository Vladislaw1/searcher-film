import {FC, ReactNode} from "react";
import classNames from "classnames";

import s from './style.module.scss'

type Color = 'primary' | 'secondary' ;

interface IProps{
    children: ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    color?: Color
}

export const Button: FC<IProps> = ({children,className,onClick,color,disabled}) =>{
    return <button className={classNames(className,s.btn,{
        [s.disabled]: disabled,
        [s.primary]: color === 'primary',
        [s.secondary]: color === 'secondary',
    })} onClick={onClick} disabled={disabled}>{children}</button>
};