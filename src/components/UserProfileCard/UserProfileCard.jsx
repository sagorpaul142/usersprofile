const UserProfileCard = ({user}) => {
    return (
        <div
            className="p-8 w-full md:max-w-sm col-span-2 md:col-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="w-24 h-24 rounded-lg mb-2" src={user?.image} alt=""/>
            <div>
                <h2 className="text-xl font-bold">{user?.firstName + " " + user?.maidenName + " " + user?.lastName}</h2>
                <ul className="mt-2">
                    <li className="flex items-center text-sm font-normal text-gray-500">
                        <svg className="w-4 h-4 text-gray-900 mr-2"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                            <path
                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                        </svg>

                        {user?.company?.title}
                    </li>

                    <li className="flex items-center text-sm font-normal text-gray-500">
                        <svg className="w-4 h-4 text-gray-900 mr-2"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"></path>
                        </svg>
                        {user?.company?.address?.address},
                        {user?.company?.address?.city}
                    </li>
                </ul>
            </div>
            <div className="">
                <div className="">
                    <address className="not-italic font-normal text-gray-500 text-sm">
                        <div className="mt-4 ">Email Address</div>
                        <a className="font-medium text-gray-900"
                           href={`mailto:${user?.email}`}>{user?.email}</a>
                        <div className="mt-4 ">Home Address</div>
                        <div className="font-medium text-gray-900">
                            {user?.address?.address}, {user?.address?.city}
                        </div>
                        <div className="mt-4 ">Phone Number</div>
                        <div className="font-medium text-gray-900">
                            {user?.phone}
                        </div>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;