
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-zinc-700 p-32 mt-32 text-center'>
                <h2 className='text-amber-400 font-bold text-3xl'>Quizzie Rascals</h2>
                <div className='flex justify-center items-center mt-6'>
                    <h2 className='text-white mr-8 text-xl'>Home</h2>
                    <h2 className='text-white mr-8 text-xl'>Quiz</h2>
                    <h2 className='text-white mr-8 text-xl'>Topics</h2>
                    <h2 className='text-white mr-8 text-xl'>Statistics</h2>
                    <h2 className='text-white text-xl'>Blog</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;