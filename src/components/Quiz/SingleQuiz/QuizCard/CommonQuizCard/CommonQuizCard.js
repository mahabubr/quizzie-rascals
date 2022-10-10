import React from 'react';

const CommonQuizCard = ({ quizOption }) => {
    return (
        <div>
            <div className='flex justify-center items-center hover:bg-emerald-100 duration-300 cursor-pointer border-2 border-teal-500 p-5 rounded-lg'>
                <input type="radio" name="" id="" className='accent-pink-500' />
                <p className='text-xl ml-4'>{quizOption}</p>
            </div>
        </div>
    );
};

export default CommonQuizCard;