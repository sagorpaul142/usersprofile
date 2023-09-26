import {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout.jsx";
import CardSkeleton from "../../components/Skeleton/CardSkeleton.jsx";
import {useGetUsersQuery} from "../../features/api/userSlice.js";
import UserCard from "../../components/UserCard/UserCard.jsx";
import Error from "../../components/Error/Error.jsx";

const Home = () => {
    const totalNumber = 12;
    const [page, setPage] = useState(parseInt(localStorage.getItem('page')) || 1)
    const {data, isLoading, isError, isFetching} = useGetUsersQuery({
        limit: totalNumber,
        skip: page * totalNumber - totalNumber
    })

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (!localStorage.getItem('page')) {
            localStorage.setItem('page', page);
        }
    }, [])


    return (
        <Layout>
            {
                !isLoading && !isFetching && !isError && data?.users?.length > 0 &&
                <div className="text-sm text-gray-700 dark:text-gray-400 mb-5 text-center md:text-left">
                    Showing
                    <span
                        className="font-semibold text-gray-900 dark:text-white mx-1">{page * totalNumber - totalNumber + 1}</span>
                    to
                    <span
                        className="font-semibold text-gray-900 dark:text-white mx-1">{page * totalNumber}</span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white mx-1">{data?.total}</span> Users
                </div>
            }
            <div
                className="grid grid-cols-1 auto-cols-auto gap-5 place-items-center lg:place-content-between  lg:grid-cols-3 sm:grid-cols-2 px-2 sm:px-4 lg:px-0">
                {
                    isLoading || isFetching && Array.from(Array(totalNumber || 0)).map((e, i) => (
                        <CardSkeleton key={i}/>
                    ))
                }
                {
                    isError && <Error message="There was an error"/>
                }
                {
                    !isLoading && !isError && data?.users?.length === 0 && <Error message="No Data Found"/>
                }
                {
                    !isLoading && !isError && data?.users?.length > 0 &&
                    data?.users?.map((user) =>
                        <UserCard
                            key={user.id}
                            user={user}
                        />
                    )
                }

            </div>
            {
                !isLoading && !isError && data?.users?.length > 0 &&
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center justify-center md:justify-end -space-x-px h-10 mt-4 text-base">
                        <li
                            className={`${page === 1 ? 'pointer-events-none' : 'cursor-pointer'} `}
                        >
                            <a href={void 0}
                               onClick={() => {
                                   localStorage.setItem('page', page - 1);
                                   setPage(page - 1);
                                   goToTop();
                               }}
                               className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>
                        {
                            Array.from(Array(Math.ceil(data?.total / totalNumber) || 0)).map((e, index) => (
                                <li key={index}
                                    className={`${(index + 1) === page ? 'z-10 cursor-pointer pointer-events-none flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'flex cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                                    onClick={() => {
                                        localStorage.setItem('page', index + 1);
                                        setPage(index + 1);
                                        goToTop();
                                    }}
                                >
                                    {index + 1}
                                </li>
                            ))
                        }
                        <li
                            className={`${page === Math.ceil(data?.total / totalNumber) ? 'pointer-events-none' : 'cursor-pointer'} `}
                        >
                            <a href={void 0}
                               onClick={() => {
                                   localStorage.setItem('page', page + 1);
                                   setPage(page + 1);
                                   goToTop();
                               }}
                               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            }
        </Layout>
    );
};

export default Home;