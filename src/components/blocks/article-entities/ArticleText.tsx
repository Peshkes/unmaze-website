import React from 'react';

type ArticleTextProps = {
    header: string
    text: string
}
const ArticleText = ({text, header}: ArticleTextProps) => {
    return (
        <div>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
};

export default ArticleText;
