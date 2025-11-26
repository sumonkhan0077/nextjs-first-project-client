import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="flex pt-40 pb-60 justify-center items-center h-full">
      <div className="w-16 h-16 border-4 border-t-[#a89141] border-b-gray-300 border-l-gray-300 border-r-gray-300 rounded-full animate-spin"></div>
    </div>
        </div>
    );
};

export default Spinner;