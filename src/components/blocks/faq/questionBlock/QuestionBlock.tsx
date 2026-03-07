import React, {useRef} from 'react';
import style from './QuestionBlock.module.css';
import {Question} from "../Faq";

type Props = {
    isOpen: boolean
    onToggle: () => void
} & Question;

const QuestionBlock = ({question, answer, isOpen, onToggle}: Props) => {
    let reRenders = useRef(-1);
    reRenders.current++

    return (
        <div
            className={`${style.block} ${isOpen ? style.open : ''} ${reRenders.current === 0 ? 'spawn-opacity-animation' : ''}`}
            onClick={onToggle}>
            <div className={style.question}>
                <h4>{question}</h4>
                <div className={`${style.cross} ${isOpen ? style.rotated : ''}`}>
                    <div className={style.line + ' ' + style.horizontal}></div>
                    <div className={style.line + ' ' + style.vertical}></div>
                </div>
            </div>
            <div className={style.answer}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default QuestionBlock;
