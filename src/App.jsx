import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from "./pages/Dashboard/Dashboard";
import AppLayout from "./components/AppLayout";
import { SideBar } from "./components/SideBar";

export const App=()=>{

      const router = createBrowserRouter([
{
  path:"/",
  element :<AppLayout/>,
  children:[
    {
      path:"/",
      element :<Dashboard />
},
{
  path:"/dashboard",
  element :<Dashboard />
},
{
  path:"/sidebar",
  element:<SideBar/>
},
  ]
}      
      ])

      return <RouterProvider router={router}/>

};