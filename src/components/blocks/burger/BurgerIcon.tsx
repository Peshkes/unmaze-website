import React from 'react';
import style from './burgerIcon.module.css';

type BurgerProps = {
    onClick: () => void;
    isOpen: boolean;
};

const BurgerIcon = ({ onClick, isOpen }: BurgerProps) => {
    return (
        <div className={`${style.burgerIcon} ${isOpen ? style.open : ''}`} onClick={onClick}>
            <div className={style.burgerTop} />
            <div className={style.burgerMiddle} />
            <div className={style.burgerBottom} />
        </div>
    );
};

export default BurgerIcon;
