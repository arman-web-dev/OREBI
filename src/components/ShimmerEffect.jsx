import React, { useState } from 'react';

const ShimmerEffect = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="w-full max-w-sm mx-auto">
      {isLoading && (
        <div className="space-y-4">
          <div className="relative overflow-hidden bg-gray-300 h-48 w-full rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"></div>
          </div>

          <div className="space-y-2">
            <div className="relative h-6 bg-gray-300 rounded">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"></div>
            </div>
            <div className="relative h-6 bg-gray-300 rounded">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"></div>
            </div>
            <div className="relative h-6 bg-gray-300 rounded w-3/4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="space-y-4">
          <img
            src="https://example.com/your-image.jpg"
            alt="Loaded Content"
            className="h-48 w-full object-cover rounded-lg transition-all duration-700 ease-in-out"
          />
          <h2 className="text-2xl font-bold text-gray-900 transition-all duration-700 ease-in-out">Loaded Content Title</h2>
          <p className="text-gray-700 transition-all duration-700 ease-in-out">
            This is the content that appears after the skeleton loading animation is done.
          </p>
        </div>
      )}
    </div>
  );
};

export default ShimmerEffect;