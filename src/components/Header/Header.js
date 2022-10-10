import { faBars, faBrain, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Header = () => {

    const [open, setOpen] = useState(false);

    const links = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Quiz', path: '/quiz' },
        { id: 3, name: 'Topics', path: '/topics' },
        { id: 4, name: 'Statistics', path: '/statistics' },
        { id: 5, name: 'Blog', path: '/blog' },
    ]

    return (
        <div className='flex justify-around items-center bg-zinc-700 p-7'>
            <div className='flex justify-center items-center'>
                <FontAwesomeIcon className='text-sky-400 mr-4 text-4xl' icon={faBrain} />
                <h2 className='text-amber-400 font-bold text-3xl'>Quizzie Rascals</h2>
            </div>
            <div className="h-6 w-6 md:hidden" onClick={() => setOpen(!open)}>
                {
                    open
                        ?
                        <FontAwesomeIcon className='text-white text-xl font-semibold' icon={faCross} />
                        :
                        <FontAwesomeIcon className='text-white text-xl font-semibold' icon={faBars} />
                }
            </div>
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-out ${open ? 'top-16 bg-zinc-800 p-6' : 'top-[-120px]'}`}>
                {
                    links.map(link => <a key={link.id} className='text-white mr-8 text-xl font-semibold' href={link.path}>{link.name}</a>)
                }
            </ul>
        </div>
    );
};

export default Header;