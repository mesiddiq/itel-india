import React from 'react';

const Button = ({ btnLabel, rounded }) => {
    return (
        <button className={`flex items-center justify-center bg-white text-black font-semibold px-6 py-2.5 ${rounded} shadow-md hover:shadow-lg transition duration-300`}>
            <span className='uppercase'>{btnLabel}</span>
            <svg
                className="ml-2 w-4 h-4 text-red-500"
                fill="none"
                stroke="red"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
};

export default Button;
