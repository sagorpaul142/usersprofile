import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import UserDetail from "../Pages/UserDetail/UserDetail.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: '',
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "user/:id", element: <UserDetail/>},
        ]
    },
])

export default routes;