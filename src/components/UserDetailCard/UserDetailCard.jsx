import UserProfileCard from "../UserProfileCard/UserProfileCard.jsx";
import UserInfoCard from "../UserInfoCard/UserInfoCard.jsx";
import {useNavigate} from "react-router-dom";

const UserDetailCard = ({user}) => {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pt-6">
            <div className="col-span-full">
                <button
                    className="flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => navigate(-1)}
                >
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                </button>
            </div>
            <UserProfileCard user={user}/>
            <UserInfoCard user={user}/>
        </div>
    );
};

export default UserDetailCard;