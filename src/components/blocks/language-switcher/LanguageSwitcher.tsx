import React from 'react';
import {useTranslation} from "react-i18next";
import {useState} from "react";
import style from './languageSwitcher.module.css'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <div className={style.button} onClick={toggleLanguage}>
            <p className={"clickable"}>{language.includes('en') ? 'ru' : 'eng'}</p>
        </div>
    );
};


export default LanguageSwitcher;
