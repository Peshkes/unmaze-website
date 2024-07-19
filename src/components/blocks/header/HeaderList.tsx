import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import style from './header.module.css';

const HeaderList = () => {
    const { t } = useTranslation();

    return (
        <nav className={style.nav}>
            <div className={style.leftEmpty}></div>
            <div className={style.centerLinks}>
                <a className={style.navLink} href='#aboutus'>{t('header.aboutUs')}</a>
                <a className={style.navLink} href='#dyslexia'>{t('header.dyslexia')}</a>
                <Link className={style.navLink} to={'/test'}>{t('header.test')}</Link>
                <Link className={style.navLink} to={'/guide'}>{t('header.guide')}</Link>
                <a className={style.navLink} href='#questions'>{t('header.questions')}</a>
                <Link className={style.navLink} to={"/articles"}>{t('header.articles')}</Link>
            </div>
            <div className={style.rightEmpty}></div>
            <a className={`${style.navLink} ${style.lastMenuItem}`} href='#footer'>{t('header.writeToUs')}</a>
        </nav>
    );
};

export default HeaderList;
