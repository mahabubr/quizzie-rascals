import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CommonQuizCard from './CommonQuizCard/CommonQuizCard';

const QuizCard = ({ QuizContent, quizData }) => {

    const { question, options, correctAnswer } = QuizContent

    // console.log(quizData)
    // console.log(correctAnswer)

    const handleQuizAnswer = (quizOption) => {
        const quizAnswerFind = quizData.find(answer => answer.correctAnswer === correctAnswer)
        const quizAnswer = quizAnswerFind.correctAnswer
        if(quizAnswer === quizOption) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }

    return (
        <div className='text-teal-500 border-4 border-teal-500 p-12 rounded-lg mb-12'>
            <div className='flex justify-between items-center'>
                <h3 className=' text-xl md:text-3xl lg:mr-40'><span className='text-rose-600 font-semibold'>Quiz: </span>{question}</h3>
                <FontAwesomeIcon className='text-rose-600 text-xl' icon={faEye} />
            </div>
            <div className=' grid lg:grid-cols-2 mt-8 gap-4'>
                {
                    options.map((quizOption, idx) => <CommonQuizCard key={idx} quizOption={quizOption} correctAnswer={correctAnswer} handleQuizAnswer={handleQuizAnswer} />)
                }
            </div>
        </div>
    );
};

export default QuizCard;