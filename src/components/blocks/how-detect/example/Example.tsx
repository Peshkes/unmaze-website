import React from 'react';
import style from './example.module.css';

const Example = () => {
    const renderItems = () => {
        const items = [];
        for (let i = 1; i < 25; i++) {
            items.push(
                <div key={i} className={style.item}>
                    <img src={require(`../../../../assets/alphabet/${i}.webp`)}/>
                    <div className={style.hiddenContent}>
                        <img src={require(`../../../../assets/alphabet/${i}a.webp`)}/>
                    </div>
                </div>
            );
        }
        return items;
    };

    return (
        <div className={style.block}>
            {renderItems()}
        </div>
    );
};

export default Example;
