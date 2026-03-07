import React from 'react';
import style from './beComingPage.module.css'
import {Link} from "react-router-dom";

const BeComingPage = () => {
    return (
        <div className={style.block}>
            <img className={style.mess} src={require('../../../assets/mess2.webp')}/>
            <h2>UNMAZE</h2>
            <p>Сервис процессе разработки</p>
            <div className={"button"}>
                <Link to={'/'}>На главную<span className="arrow">→</span></Link>
            </div>
        </div>
    );
};

export default BeComingPage;
