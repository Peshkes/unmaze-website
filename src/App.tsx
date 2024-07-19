import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ArticlesPage from "./components/pages/ArticlesPage";
import GuidePage from "./components/pages/GuidePage";
import ErrorPage from "./components/pages/ErrorPage";
import './libraries/i18next/i18n';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/articles"} element={<ArticlesPage/>}/>
                <Route path={"/guide"} element={<GuidePage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
