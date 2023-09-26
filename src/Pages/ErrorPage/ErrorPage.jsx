import Layout from "../../components/Layout/Layout.jsx";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <Layout>
            <h1 className="text-2xl">Oops...</h1>
            <p className="text-sm">Sorry, an unexpected error has occurred</p>
        </Layout>
    );
};

export default ErrorPage;