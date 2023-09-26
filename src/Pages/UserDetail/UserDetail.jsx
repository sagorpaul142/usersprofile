import Layout from "../../components/Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {useGetSingleUserQuery} from "../../features/api/userSlice.js";
import UserDetailCard from "../../components/UserDetailCard/UserDetailCard.jsx";
import UserDetailCardSkeleton from "../../components/Skeleton/UserDetailCardSkeleton.jsx";
import Error from "../../components/Error/Error.jsx";

const UserDetail = () => {
    const params = useParams()
    const {data: user, isLoading, isError} = useGetSingleUserQuery(parseInt(params.id))
    let content = null;
    if (isLoading) {
        content = <UserDetailCardSkeleton/>
    }
    if (isError) {
        content = <Error message="There was an error"/>;
    }

    if (!isLoading && !isError && user === null) {
        content = <Error message="No Data Found"/>;
    }

    if (!isLoading && !isError && user !== null) {
        content = <UserDetailCard user={user}/>;
    }

    return (
        <Layout>
            {content}
        </Layout>
    );
};

export default UserDetail;