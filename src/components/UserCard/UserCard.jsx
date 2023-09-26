import {Link} from "react-router-dom";

const UserCard = ({user}) => {
    return (
        <div
             className="px-4 pt-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                     src={user?.image} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.firstName + " " + user?.maidenName + " " + user?.lastName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                <div className="w-full flex justify-end mt-4 space-x-3 md:mt-6 cursor-pointer ">
                    <Link to={`user/${user?.id}`}
                          className="inline-flex items-center items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Detail
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCard;