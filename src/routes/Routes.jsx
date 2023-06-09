import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import {
    createBrowserRouter
  } from "react-router-dom";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Category></Category>,
          loader: ()=>fetch(`http://localhost:5000/news`)
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:"news",
      element:<NewsLayout></NewsLayout>,
      children: [
        {
          path:":id",
          element:<News></News>,
          loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);
  export default router