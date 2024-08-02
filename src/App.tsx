import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ErrorPage from "./components/pages/ErrorPage";
import './libraries/i18next/i18n';
import BeComingPage from "./components/pages/be-coming/BeComingPage";
import Footer from "./components/blocks/footer/Footer";
import HeaderBlock from "./components/blocks/header/HeaderBlock";
import ArticlesPage from "./components/pages/articles-page/ArticlesPage";

function App() {
    return (
        <div className="App">
            <HeaderBlock/>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                {/*<Route path={"/articles-preview"} element={<ArticlesPage/>}/>*/}
                {/*<Route path={"/test"} element={<TestPage/>}/>*/}
                {/*<Route path={"/guide"} element={<GuidePage/>}/>*/}
                <Route path={"/articles"} element={<ArticlesPage/>}/>
                <Route path={"/test"} element={<BeComingPage/>}/>
                <Route path={"/guide"} element={<BeComingPage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
