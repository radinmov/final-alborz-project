import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Homepage } from "./pages/HomePage";




const routes = createBrowserRouter([
    {
        path: "/",
        element:<Homepage /> ,
    } ,
    {
        path: "/login",
        element:<Login /> ,
    }
]);


export default function Router() {
    return <RouterProvider router={routes} />;
}