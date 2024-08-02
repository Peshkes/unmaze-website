import React from 'react';

type HeaderProps = {
    text: string
    image?: string
}

const ArticleHeader = ({text, image}: HeaderProps) => {
    return (
        <div>
            {image && <img src={image}/>}
            <h1>{text}</h1>
        </div>
    );
};

export default ArticleHeader;
