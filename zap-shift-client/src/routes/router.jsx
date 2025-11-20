import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../page/home/Home/Home";
import Coverage from "../page/Coverage/Coverage";
import Authlayout from "../layout/Authlayout";
import Login from "../page/Auth/Loogin/Login";
import Register from "../page/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children:[{
      index:true,
      Component:Home

    },
    {
      path:"/coverage",
      Component:Coverage,
      loader:()=>fetch('/warehouses.json').then(res=>res.json())
    }
  
  ]
  },

   {
    path:'/',
    Component:Authlayout,
    children:[{
      path: '/login',
      Component:Login
    },
  {
    path: '/register',
    Component:Register
  }
  ]
  }
 
]);