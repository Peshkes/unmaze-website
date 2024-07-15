import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./components/pages/Main";
import Articles from "./components/pages/Articles";
import Guide from "./components/pages/Guide";
import ErrorPage from "./components/pages/ErrorPage";
import './libraries/i18next/i18n';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/articles"} element={<Articles/>}/>
                <Route path={"/guide"} element={<Guide/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
