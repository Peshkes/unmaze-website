import React from 'react';
import style from './footer.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div id={'footer'} className={`${style.block} wrapper`}>
            <div className={style.top}>
                <div className={style.topLeft}>
                    <p>{t('footer.business')}</p>
                    <a href={'mailto:manager@unmaze.ru'}>manager@unmaze.ru</a>
                    <br/>
                    <p>{t('footer.call')}</p>
                    <a href={'tel:+79111112000'}>+7 911 111 20 00</a>
                    <a href={'tel:+79111112000'}>+7 928 164 97 34</a>
                </div>
                <div className={style.topMiddle}>
                    <a className={style.navLink} href='#aboutus'>{t('header.aboutUs')}</a>
                    <a className={style.navLink} href='#dyslexia'>{t('header.dyslexia')}</a>
                    <Link className={style.navLink} to={'/test'}>{t('header.test')}</Link>
                    <Link className={style.navLink} to={'/guide'}>{t('header.guide')}</Link>
                    <a className={style.navLink} href='#questions'>{t('header.questions')}</a>
                    <Link className={style.navLink} to={"/articles"}>{t('header.articles')}</Link>
                </div>
                <div className={style.topRight}>
                    <a href={'*'} target={'_blank'} rel="noreferrer">Instagram</a>
                    <a href={'*'} target={'_blank'} rel="noreferrer">Telegram</a>
                    <a href={'*'} target={'_blank'} rel="noreferrer">App</a>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.bottomLeft}>
                    <Link to={'/error'}>{t("footer.cooperation")}</Link>
                    <a href={''} target={"_blank"} rel="noreferrer">{t("footer.privacy")}</a>
                </div>
                <div className={style.bottomRight}>
                    <img src={require('../../../assets/logo147black.webp')}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
