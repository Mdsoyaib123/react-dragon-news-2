import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carrer from "../Pages/Carrer/Carrer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetelis from "../Pages/news/NewsDetelis";
import PriveitRoute from "../PriveitRoute/PriveitRoute";


const routes= createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PriveitRoute>
                    <NewsDetelis></NewsDetelis>
                </PriveitRoute>
            },
            {
                path:'/about',
                element: <About></About>,

            },
            {
                path:'/carrer',
                element: <Carrer></Carrer>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
            
        ]
    }
])
export default routes;