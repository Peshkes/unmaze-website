import React from 'react';

type RemovalProps = {
    text: string
    image?: string
}

const ArticleRemoval = ({text, image}: RemovalProps) => {
    return (
        <div>
            {image && <img src={image}/>}
            <h4>{text}</h4>
        </div>
    );
};

export default ArticleRemoval;
