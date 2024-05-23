import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Homepage } from "./pages/HomePage";
import SignUp from "./pages/SignUp";




const routes = createBrowserRouter([
    {
        path: "/",
        element:<Homepage /> ,
    } ,
    {
        path: "/login",
        element:<Login /> ,
    },
    {
        path: "/SignUp",
        element:<SignUp /> ,
    }
]);


export default function Router() {
    return <RouterProvider router={routes} />;
}