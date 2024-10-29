import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from "./components/Dashboard";
import AppLayout from "./components/AppLayout";
import { SideBar } from "./components/SideBar";
import { Users } from "./components/Users";
import { Login } from "./pages/Login";


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
}
  ]
}      
      ])

      return <RouterProvider router={router}/>

};