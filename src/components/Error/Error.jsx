import React from 'react';

const Error = ({message}) => {
    return (
        <div className="w-full flex items-center justify-center rounded-md h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12">
            {message}
        </div>
    );
};

export default Error;