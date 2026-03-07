import React from 'react';
import HelloScreen from "../blocks/hello-screen/HelloScreen";
import Description from "../blocks/description/Description";
import HowDetect from "../blocks/how-detect/HowDetect";
import Guide from "../blocks/guide/Guide";
import Faq from "../blocks/faq/Faq";
import ArticlesPreview from "../blocks/articles-preview/ArticlesPreview";
import Videos from "../blocks/videos/videos";

const MainPage = () => {
    return (
        <div>
            <HelloScreen/>
            <Description/>
            <Videos/>
            <HowDetect/>
            <Guide/>
            <Faq/>
            <ArticlesPreview count={4} header={'manePageTitle'}/>
        </div>
    );
};

export default MainPage;
