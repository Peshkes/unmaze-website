import React from 'react';
import style from './description.module.css'

type descriptionData = {
    title: string
    text: string
}
const data: Array<descriptionData> = [
    {
        title: 'Задания в игровой форме',
        text: 'Ребенок проходит задания уровень за уровнем. Игровая форма помогает поддерживать интерес к занятиям, а формат достижений сменяет фокус с успеха на процесс.'
    },
    {
        title: 'Отслеживание прогресса',
        text: 'Это необходимо, чтобы корректировать методы обучения и находить индивидуальный подход к ребенку. В unmaze вы можете отследить подробную динамику и прогресс.'
    },
    {
        title: 'Поддержка для родителей',
        text: 'Ребенок проходит задания уровень за уровнем. Быть родителем — это ежедневные усилия. И знаем, что вам точно нужна помощь. Рассказываем, как вести себя с ребенком, поддерживать себя и сохранять ресурс, даже когда тяжело.'
    },
    {
        title: 'Замена логопеду',
        text: 'Регулярные занятия с логопедом — это время. Unmaze — эффективная замена специалисту, ведь приложение разработано при участии врачей.'
    }
];

const Description = () => {
    return (
        <div className={`${style.block} wrapper`}>
            <img className={style.mess} src={require('../../../assets/mess2.webp')}/>
            <h2>unmaze – это</h2>
            <div className={style.grid}>
                {data.map((item, index) => (
                    <div className={style.subBlock}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Description;
