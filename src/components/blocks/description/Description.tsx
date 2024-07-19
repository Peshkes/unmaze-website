import React from 'react';
import style from './description.module.css'
import {useTranslation} from "react-i18next";

const Description = () => {
    const {t} = useTranslation();

    return (
        <div id={'aboutus'} className={`${style.block} wrapper`}>
            <img className={style.mess} src={require('../../../assets/mess2.webp')}/>
            <h2>{t('description.title')}</h2>
            <div className={style.grid}>
                {[...Array(4)].map((_, index) => (
                    <div className={style.subBlock} key={index}>
                        <h3>{t(`description.${index}.title`)}</h3>
                        <p>{t(`description.${index}.text`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Description;
