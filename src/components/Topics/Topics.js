import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../Home/HomeCard/HomeCard';

const Topics = () => {

    const QuizData = useLoaderData()
    const quizzes = QuizData.data

    return (
        <div>
            <HomeCard quizzes={quizzes} />
        </div>
    );
};

export default Topics;