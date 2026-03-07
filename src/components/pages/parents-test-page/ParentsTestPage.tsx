import React, {useState} from 'react';
import Question from "../../blocks/question/Question";
import style from './parentsTestPage.module.css'

const questions = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
    'Question 7',
    'Question 8',
];

const ParentsTestPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswer = (index: number, value: number) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const questionsPerPage = 5;
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    const currentQuestions = questions.slice(start, end);

    return (
        <div className={`${style.block} wrapper`}>
            {currentQuestions.map((question, index) => (
                <div key={start + index}>
                    <Question
                        index={start + index}
                        question={question}
                        selectedValue={answers[start + index]}
                        handleAnswer={handleAnswer}
                    />
                    {index < currentQuestions.length - 1 &&
                        <hr/>} {/* Горизонтальная линия под всеми вопросами, кроме последнего */}
                </div>
            ))}
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
                    Previous
                </button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>
            {currentPage === totalPages - 1 && (
                <button onClick={() => console.log(answers)}>Submit</button>
            )}
        </div>
    );
};

export default ParentsTestPage;
