import React from 'react';
import style from './example.module.css';

const Example = () => {
    const renderItems = () => {
        const items = [];
        for (let i = 0; i < 24; i++) {
            items.push(
                <div key={i} className={style.item}>
                    <img src={require('../../../../assets/mess1.webp')}/>
                    <div className={style.hiddenContent}>
                        <img src={require('../../../../assets/mess2.webp')}/>
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
