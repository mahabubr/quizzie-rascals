import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import HomeSingleCard from './HomeSingleCard/HomeSingleCard';

const HomeCard = ({ quizzes }) => {
    return (
        <div className='mt-24 w-10/12 mx-auto grid grid-cols-4 gap-8'>
            {
                quizzes.map(quiz => <HomeSingleCard key={quiz.id} quiz={quiz} />)
            }
        </div>
    );
};

export default HomeCard;