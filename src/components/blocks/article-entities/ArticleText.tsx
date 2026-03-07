import React from 'react';
import style from './articles-entites.module.css'

type ArticleTextProps = {
    header?: string
    text?: string
}
const ArticleText = ({text, header}: ArticleTextProps) => {
    return (
        <div className={style.textBlock}>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
};

export default ArticleText;
