import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
            <div className="text-center max-w-md px-4">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-lg text-gray-600">
                    The page you were looking for couldn’t be found. The page could be removed or you mistyped the URL. Maybe try a search?
                </p>
                
                <div className="mt-6 flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Type to search"
                        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-r-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h2v4m0 4h.01M14.7 15.3a7.5 7.5 0 111.6-1.6l3.85 3.85" />
                        </svg>
                    </button>
                </div>

               <Link to='/'                     className="mt-6 inline-block px-6 py-2 bg-gray-800 text-white text-lg rounded-md hover:bg-gray-700 transition-colors"
               >
               Back to Home

               </Link>
            </div>
        </div>
  );
}

export default NotFound;
