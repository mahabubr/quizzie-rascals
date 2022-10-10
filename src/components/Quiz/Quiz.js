import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz/SingleQuiz';

const Quiz = () => {

    const quizInfo = useLoaderData()
    const quizData = quizInfo.data.questions;

    const quizName = quizInfo.data;

    return (
        <div>
            <SingleQuiz quizData={quizData} quizName={quizName} />
        </div>
    );
};

export default Quiz;