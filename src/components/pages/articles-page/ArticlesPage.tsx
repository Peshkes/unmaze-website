import React, {useEffect, useState} from 'react';
import {FakeBase} from "../../../api/FakeBase";
import {Link} from "react-router-dom";
import style from './articlespage.module.css'
import {ArticlePreview} from "../../../api/types";
import {useTranslation} from "react-i18next";


const ArticlesPage = () => {
    const [articles, setArticles] = useState<Array<ArticlePreview>>([]);
    const [page, setPage] = useState(1);
    const articlesPerPage = 8;
    const {i18n} = useTranslation();
    const currentLanguage = i18n.language as 'ru' | 'en';


    useEffect(() => {
        FakeBase.getArticlesPreview().then((data) => {
            setArticles(data);
        });
    }, []);

    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedArticles = articles.slice(startIndex, endIndex);
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handleNextPage = () => {
        if (endIndex < articles.length) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handlePageChange = (pageNum: number) => {
        setPage(pageNum);
    };

    return (
        <div className={`${style.block} wrapper`}>
            <div className={style.list}>
                {paginatedArticles.map((article) => (
                    <div key={article.id} className={style.article}>
                        <Link to={`/articles/${article.link}`}>
                            <img src={article.image}/>
                            <p>{currentLanguage === 'ru' ? article.ru_category : article.en_category}</p>
                            <h3>{currentLanguage === 'ru' ? article.ru_title : article.en_title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
            {articles && articles.length > 8 &&
                <div className={style.pagination}>
                    <button onClick={handlePreviousPage} disabled={page === 1} className={style.leftArrow}>
                        ←
                    </button>
                    {Array.from({length: totalPages}, (_, i) => (
                        <button
                            key={i + 1}
                            className={`${style.pageNumber} ${page === i + 1 ? style.active : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={handleNextPage} disabled={endIndex >= articles.length} className={style.rightArrow}>
                        →
                    </button>
                </div>}
        </div>
    );
};

export default ArticlesPage;
