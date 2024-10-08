import React, {useEffect, useState} from 'react';
import style from './articles.module.css'
import {useTranslation} from "react-i18next";
import {FakeBase} from "../../../api/FakeBase";
import {ArticlePreview} from "../../../api/types";

type ArticlesProps = {
    count: number
    header: string
}

const ArticlesPreview = ({count, header}: ArticlesProps) => {
    const {i18n, t} = useTranslation();
    const currentLanguage = i18n.language;
    const [articles, setArticles] = useState<Array<ArticlePreview>>([]);

    useEffect(() => {
        FakeBase.getArticlesPreview(count).then((data) => setArticles(data))
    }, []);

    const getTitle = (article: ArticlePreview) => {
        return currentLanguage === 'ru' ? article.ru_title : article.en_title;
    };

    return (
        <div className={`${style.block} wrapper`}>
            <h2>{t(`articles.${header}`)}</h2>
            <div className={style.articles}>
                {articles.length > 0 && articles.map((item) => (
                    <div className={style.subBlock} key={item.id} style={{backgroundImage: `url(${item.image})`}}>
                        <h3>{getTitle(item)}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesPreview;
