import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../page/home/Home/Home";
import Coverage from "../page/Coverage/Coverage";

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
]);