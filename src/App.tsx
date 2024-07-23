import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ErrorPage from "./components/pages/ErrorPage";
import './libraries/i18next/i18n';
import BeComingPage from "./components/pages/be-coming/BeComingPage";
import Cursor from "./components/blocks/cursor/Cursor";

function App() {
    return (
        <div className="App">
            <Cursor/>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                {/*<Route path={"/articles"} element={<ArticlesPage/>}/>*/}
                {/*<Route path={"/test"} element={<TestPage/>}/>*/}
                {/*<Route path={"/guide"} element={<GuidePage/>}/>*/}
                <Route path={"/articles"} element={<BeComingPage/>}/>
                <Route path={"/test"} element={<BeComingPage/>}/>
                <Route path={"/guide"} element={<BeComingPage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
