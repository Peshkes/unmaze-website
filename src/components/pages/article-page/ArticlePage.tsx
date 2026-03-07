import React, {useEffect, useState} from 'react';
import {ArticleContent} from "../../../api/types";
import {useNavigate, useParams} from "react-router-dom";
import {FakeBase} from "../../../api/FakeBase";
import ArticleRemoval from "../../blocks/article-entities/ArticleRemoval";
import ArticleHeader from "../../blocks/article-entities/ArticleHeader";
import {useTranslation} from "react-i18next";
import ArticleDescription from "../../blocks/article-entities/ArticleDescription";
import ArticleImage from "../../blocks/article-entities/ArticleImage";
import ArticleText from "../../blocks/article-entities/ArticleText";
import style from './articlepage.module.css'

const ArticlePage = () => {
    const { article } = useParams<{ article: string }>();
    const [content, setContent] = useState<ArticleContent | undefined>(undefined);
    const navigation = useNavigate();
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language as 'ru' | 'en';

    useEffect(() => {
        if (!article) {
            navigation('/');
        } else
            FakeBase.getArticle(article).then((data) => setContent(data));
    }, [article, currentLanguage]);

    if (!content) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${style.page} wrapper`}>
            {content.map((item, index) => (
                <div key={index} className={style.block}>
                    {item.type === 'header' &&
                        <ArticleHeader text={item[`${currentLanguage}_text` as keyof typeof item]}/>}
                    {item.type === 'description' &&
                        <ArticleDescription text={item[`${currentLanguage}_text` as keyof typeof item]}/>}
                    {item.type === 'image' && item.src && <ArticleImage image={item.src}/>}
                    {item.type === 'paragraph' && (
                        <ArticleText
                            text={item[`${currentLanguage}_text` as keyof typeof item]}
                            header={item[`${currentLanguage}_header` as keyof typeof item]}
                        />
                    )}
                    {item.type === 'removal' &&
                        <ArticleRemoval text={item[`${currentLanguage}_text` as keyof typeof item]}
                                        image={item.image}/>}
                </div>
            ))}
        </div>
    );
};

export default ArticlePage;
