import React, {useState} from 'react';
import style from './faq.module.css'
import QuestionBlock from "./questionBlock/QuestionBlock";
import {useTranslation} from "react-i18next";

export type Question = {
    question: string;
    answer: string;
}

const Faq = () => {
    const {t} = useTranslation();
    const [openIndex, setOpenIndex] = useState(-1);
    const toggleAnswer = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };
    return (
        <div className={`${style.faq} wrapper`}>
            <h2>{t('faq.title')}</h2>
            <div className={style.faqBlock}>
                {[...Array(4)].map((_, index) => (
                    <QuestionBlock question={t(`faq.${index}.question`)} answer={t(`faq.${index}.answer`)} key={"questionBlock_" + index}
                                   isOpen={index === openIndex} onToggle={() => toggleAnswer(index)}/>
                ))}
            </div>
        </div>
    );
};

export default Faq;
