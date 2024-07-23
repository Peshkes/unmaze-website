import React from 'react';
import HeaderBlock from "../blocks/header/HeaderBlock";
import HelloScreen from "../blocks/hello-screen/HelloScreen";
import Description from "../blocks/description/Description";
import HowDetect from "../blocks/how-detect/HowDetect";
import Guide from "../blocks/guide/Guide";
import Faq from "../blocks/faq/Faq";
import Articles from "../blocks/articles/Articles";
import Videos from "../blocks/videos/videos";

const MainPage = () => {
    return (
        <div>
            <HeaderBlock/>
            <HelloScreen/>
            <Description/>
            <Videos/>
            <HowDetect/>
            <Guide/>
            <Faq/>
            <Articles/>
        </div>
    );
};

export default MainPage;
