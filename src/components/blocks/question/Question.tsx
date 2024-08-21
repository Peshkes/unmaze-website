import style from './question.module.css';
import React from "react";

type QuestionProps = {
    question: string
    index: number
    selectedValue: number
    handleAnswer: (index: number, value: number) => void
}

const Question = ({question, index, selectedValue, handleAnswer}: QuestionProps) => {
    return (
        <div className={style.block}>
            <h2>{question}</h2>
            <div className={style.selectorBlock}>
                <div className={style.radioGroup}>
                    {[...Array(7)].map((_, i) => {
                        const value = i - 3;
                        return (
                            <label className={style[`radio${Math.abs(value)}`]} key={value}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={value}
                                    checked={selectedValue === value}
                                    onChange={() => handleAnswer(index, value)}
                                />
                                <span className={style.customRadio}></span>
                            </label>
                        );
                    })}
                </div>
                <div className={style.labels}>
                    <span>Несогласен</span>
                    <span>Согласен</span>
                </div>
            </div>
        </div>
    );
};

export default Question;
