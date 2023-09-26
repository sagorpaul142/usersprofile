import {Link} from "react-router-dom";

const UserInfoCard = ({user}) => {
    return (
        <div className="col-span-2 mt-4 md:mt-0">
            <div className="xl:p-8 sm:p-6 p-3 shadow bg-white rounded">
                <h3 className="font-bold text-xl mb-4">General Information</h3>
                <dl className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Education</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.university}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Work Loaction</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.company?.address.address}, {user?.company?.address?.city}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Organization</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.company?.name}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Role</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.company?.title}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Department</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.company?.department}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Birthday</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.birthDate}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Gender</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.gender}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Age</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.age}</dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Website</dt>
                        <dd className="">
                            <button className="mt-1">
                                <Link
                                    className="font-semibold text-sm bg-cyan-600 text-white px-3 py-1 rounded-lg mt-2"
                                    to={'https://' + user?.domain} target="_blank" rel='noreferrer'>Go</Link>
                            </button>
                        </dd>
                    </div>
                    <div>
                        <dt className="font-medium text-sm text-gray-500">Bank Card Number</dt>
                        <dd className="font-semibold text-gray-900 text-sm">{user?.bank?.cardNumber}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default UserInfoCard;