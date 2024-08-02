import React from 'react';
import style from './articles-entites.module.css'

const ArticleImage = ({image} : {image: string}) => {
    return (
        <div className={style.imageBlock}>
            <img src={image}/>
        </div>
    );
};

export default ArticleImage;
