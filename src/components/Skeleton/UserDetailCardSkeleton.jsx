import UserProfileCardSkeleton from "./UserProfileCardSkeleton.jsx";
import UserInfoCardSkeleton from "./UserInfoCardSkeleton.jsx";

const UserDetailCardSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pt-6">
            <div className="col-span-full">
                <button className="w-16 h-9 bg-gray-200 rounded-lg dark:bg-gray-700">
                </button>
            </div>
            <UserProfileCardSkeleton />
            <UserInfoCardSkeleton />
        </div>
    );
};

export default UserDetailCardSkeleton;