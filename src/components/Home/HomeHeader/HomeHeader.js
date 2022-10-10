import React from 'react';
import Lottie from "lottie-react";
import anime from '../../../assets/anime.json'

const HomeHeader = () => {

    return (
        <div className='lg:flex justify-between items-center w-10/12 mx-auto mt-12 border-2 border-zinc-600 rounded-3xl p-8 lg:p-16 shadow-2xl'>
            <div className='lg:w-6/12'>
                <h1 className='text-3xl md:text-7xl font-bold text-violet-500'>Household item <span className='text-red-500'>challenges !!!</span></h1>
                <p className='text-lg mt-6 text-gray-600'>A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.</p>
                <button className='mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-orange-500 hover:bg-orange-600 duration-500 p-4 md:px-10 md:py-5 rounded-xl text-xl font-bold shadow-2xl'>
                    SEE MORE
                </button>
            </div>
            <div className='lg:w-6/12'>
                <Lottie animationData={anime} loop={true} />
            </div>
        </div>
    );
};

export default HomeHeader;