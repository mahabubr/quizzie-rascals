import React from 'react';
import QuizCard from './QuizCard/QuizCard';

const SingleQuiz = ({ quizData, quizName }) => {

    return (
        <div className='mt-16'>
            <h2 className='text-center text-5xl font-semibold text-teal-600 border-x-8 border-teal-600 py-4 w-8/12 mx-auto'>Quiz Of {quizName.name}</h2>

            <div className='w-10/12 md:w-7/12 mx-auto mt-12'>
                {
                    quizData.map(QuizContent => <QuizCard key={QuizContent.id} QuizContent={QuizContent} quizData={quizData} />)
                }
            </div>

        </div>
    );
};

export default SingleQuiz;