import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";

export const routes = [
    {path: '/', element: <Home/>},
    {path: 'about/', element: <About/>},
    {path: 'blog/', element: <Blog/>},
]