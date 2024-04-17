import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-6xl font-bold mb-4">Oooppsss!!!</h2>
            <p className="text-lg mb-8">It seems like something went wrong.</p>
            <Link to="/" className="text-blue-500 hover:underline">Go back to home</Link>
        </div>
    );
};

export default Error;
