import React from 'react';

const Button = ({ onClick, label ,className }) => {
    return (
        <button onClick={onClick} class="bg-red-600 
        text-white py-4 px-6 text-xl rounded shadow-md
        shadow-gray-500
        transform transition duration-200 hover:bg-red-700 
        active:scale-95 active:shadow-lg active:translate-y-1">
       {label}
        </button>
    );
};

export default Button;
