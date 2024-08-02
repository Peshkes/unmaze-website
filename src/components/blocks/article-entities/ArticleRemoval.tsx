import React from 'react';
import style from './articles-entites.module.css'

type RemovalProps = {
    text?: string
    image?: string
}

const ArticleRemoval = ({text, image}: RemovalProps) => {
    return (
        <div className={style.removalBlock}>
            {image && <img src={image}/>}
            <h4>{text}</h4>
        </div>
    );
};

export default ArticleRemoval;
