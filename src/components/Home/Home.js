import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard/HomeCard';
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {

    const QuizData = useLoaderData()
    const quizzes = QuizData.data

    return (
        <div>
            <HomeHeader />
            <HomeCard quizzes={quizzes} />
        </div>
    );
};

export default Home;