import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CommonQuizCard from './CommonQuizCard/CommonQuizCard';
import Swal from 'sweetalert2'


const QuizCard = ({ QuizContent, quizData }) => {

    const { question, options, correctAnswer } = QuizContent

    const handleQuizAnswer = (quizOption) => {
        const quizAnswerFind = quizData.find(answer => answer.correctAnswer === correctAnswer)
        const quizAnswer = quizAnswerFind.correctAnswer
        if (quizAnswer === quizOption) {
            Swal.fire({
                title: 'YAY!',
                text: 'This Is Currect Answer',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        else {
            Swal.fire({
                title: 'OOPS...!',
                text: 'This Is Wrong Answer',
                icon: 'error',
                confirmButtonText: 'Try Another'
            })
        }
    }

    const handleShowAnswer = () => {
        console.log(correctAnswer)
        Swal.fire({
            title: `Your Correct Answer : ${correctAnswer}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          
    }

    return (
        <div className='text-teal-500 border-4 border-teal-500 p-12 rounded-lg mb-12'>
            <div className='flex justify-between items-center'>
                <h3 className=' text-xl md:text-3xl lg:mr-40'>{question}</h3>
                <FontAwesomeIcon onClick={handleShowAnswer} className='text-rose-600 text-xl
                 cursor-pointer' icon={faEye} />
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