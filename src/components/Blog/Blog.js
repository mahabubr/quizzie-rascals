import React from 'react';

const Blog = () => {
    return (
        <div className="mt-28 w-10/12 md:w-7/12 mx-auto">
            <div className="bg-slate-600 text-white p-12 rounded-3xl mt-8">
                <h3 className="text-3xl">what is the purpose of react router</h3>
                <p className="mt-2 text-xl">react router used in react library. it healps for single page application on webpage. react router define multi page. it works like navigation. react router helps load api data easyly. mainly react router control webpages.</p>
            </div>
            <div className="bg-slate-600 text-white p-12 rounded-3xl mt-8">
                <h3 className="text-3xl">how context api works in react</h3>
                <p className="mt-2 text-xl">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            </div>
            <div className="bg-slate-600 text-white p-12 rounded-3xl mt-8">
                <h3 className="text-3xl">what is useref in react</h3>
                <p className="mt-2 text-xl">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;