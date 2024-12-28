import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    errorElement: <h1>404 || PAGE NOT FOUND</h1>,
    children:[
        {
           path: "admin",
           element: <Admin />
        },
        {
            path: "student",
            element: <Student />
        },
        {
            path: "teacher",
            element: <Teacher />
        }
    ]
},
{
    path: "/login",
    element: <Login />,
},

{
    path: "/signup",
    element: <Signup />,
}

])

export default router