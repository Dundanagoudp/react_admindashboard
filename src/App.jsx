import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from "./components/Dashboard";
import AppLayout from "./components/AppLayout";
import { SideBar } from "./components/SideBar";
import { Users } from "./components/Users";
import { Login } from "./pages/Login";
import SignUp from "./pages/SignUp";


export const App=()=>{

      const router = createBrowserRouter([
{
  path:"/",
  element :<AppLayout/>,
  children:[
    {
      path:"/",
      element :<Dashboard/>
},
{
  path:"/dashboard",
  element :<Dashboard />
},
{
  path:"/sidebar",
  element:<SideBar/>
},
{
  path:"/users",
  element:<Users/>
},
{
  path:"/login",
  element:<Login/>
},
{
  path:"/signup",
  element:<SignUp/>
}
  ]
}      
      ])

      return <RouterProvider router={router}/>

};