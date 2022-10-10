import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const HomeSingleCard = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className='border border-zinc-700  rounded-2xl shadow-2xl'>
            <img className='rounded-t-2xl bg-yellow-300' src={logo} alt="" />
            <div className='p-8'>
                <div className='flex mb-4 justify-between items-center'>
                    <p className='bg-sky-700 py-3 px-6 text-white rounded-lg text-center'>Total : {total}</p>
                    <p className='bg-sky-700 py-3 px-6 text-white rounded-lg text-center'>10s</p>
                </div>
                <h3 className='text-2xl'>{name}</h3>
                <button className='bg-orange-500 hover:bg-orange-600 duration-500 rounded-lg py-3 w-full font-bold shadow-2xl mt-4 flex justify-center items-center text-white'>
                    <p>Start Practice</p>
                    <FontAwesomeIcon className='ml-2' icon={faArrowAltCircleRight} />
                </button>
            </div>
        </div>
    );
};

export default HomeSingleCard;