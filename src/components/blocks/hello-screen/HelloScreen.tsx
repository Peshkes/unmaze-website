import React from 'react';
import style from './helloScreen.module.css'

const HelloScreen = () => {
    return (
        <div className={style.block}>
            <h1 className={'wrapper'}>привет, мы  unmaze — приложение, которое помогает детям
                с дислексией</h1>
            <div className={style.imageBlock}>
                <img src={require('../../../assets/iphone.webp')} alt="App Screen"/>
                <img className={style.mess} src={require('../../../assets/mess1.webp')} alt="App Screen"/>
            </div>
            <div className={"button"}>
                <a href="#">Скачать приложение<span className="arrow">→</span></a>
            </div>
        </div>
    );
};

export default HelloScreen;
