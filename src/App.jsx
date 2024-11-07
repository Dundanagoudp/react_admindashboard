import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from "./components/Dashboard";
import AppLayout from "./components/AppLayout";
import { SideBar } from "./components/SideBar";
import { Users } from "./components/Users";
import { Login } from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductUpload } from "./pages/ProductUpload";
import { ProductList } from "./pages/ProductList";


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
},
{
  path:"/productdetails",
  element:<ProductDetails/>
},
{
  path:"/productupload",
  element:<ProductUpload/>
},
{
  path:"/productlist",
  element:<ProductList/>
}
  ]
}      
      ])

      return <RouterProvider router={router}/>

};