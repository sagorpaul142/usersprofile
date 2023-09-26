const UserProfileCardSkeleton = () => {
    return (
        <div
            className="p-8 w-full md:max-w-sm col-span-2 md:col-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg className="w-24 h-24 mb-3 rounded-full shadow-lg text-gray-200 dark:text-gray-700"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>

            <div>
                <h2 className="w-44 h-5 bg-gray-200 text-xl font-bold rounded-lg dark:bg-gray-700"></h2>
                <ul className="mt-2">
                    <li className="flex items-center text-sm font-normal text-gray-500">
                        <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                    </li>
                    <li className="flex items-center text-sm font-normal text-gray-500">
                        <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                    </li>
                </ul>
            </div>
            <div className="">
                <div className="">
                    <address className="not-italic font-normal text-gray-500 text-sm">
                        <div className="mt-4 ">
                            <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                        </div>
                        <a className="font-medium text-gray-900" href={void 0}>
                            <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                        </a>
                        <div className="mt-4 ">
                            <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                        </div>
                        <div className="font-medium text-gray-900">
                            <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                        </div>
                        <div className="mt-4 ">
                            <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                        </div>
                        <div className="font-medium text-gray-900">
                            <div className="w-60 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2.5"></div>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCardSkeleton;