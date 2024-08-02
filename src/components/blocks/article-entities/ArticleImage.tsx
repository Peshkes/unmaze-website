import React from 'react';

const ArticleImage = ({image} : {image: string}) => {
    return (
        <div>
            <img src={image}/>
        </div>
    );
};

export default ArticleImage;
