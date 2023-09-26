const UserInfoCardSkeleton = () => {
    return (
        <div className="col-span-2 mt-4 md:mt-0">
            <div className="xl:p-8 sm:p-6 p-3 shadow bg-white rounded">
                <h3 className="font-bold text-xl mb-4 w-44 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></h3>
                <dl className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div>
                        <dt className="w-20 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-56 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-28 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-56 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-24 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-52 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-10 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-56 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-24 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-56 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-16 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-56 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-14 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-10 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-10 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-8 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-14 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-10 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                    <div>
                        <dt className="w-24 h-5 bg-gray-200 rounded-lg dark:bg-gray-700"></dt>
                        <dd className="w-40 h-5 bg-gray-200 rounded-lg dark:bg-gray-700 mt-2"></dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default UserInfoCardSkeleton;