const CardSkeleton = () => {
    return (
        <div
            className="px-4 pt-4 w-full max-w-sm flex flex-col items-center border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex items-center mt-4 space-x-3">
                <svg className="w-24 h-24 mb-3 rounded-full shadow-lg text-gray-200 dark:text-gray-700"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
            </div>
            <div className="w-60 h-7 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
            <div className="w-40 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
            <div className="flex mt-4 space-x-3 md:mt-6 cursor-pointer">
                <div className="w-16 h-9 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default CardSkeleton;