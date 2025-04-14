import Home from "../Pages/Home";
import About from "../Pages/About";
import Properties from "../Pages/Properties";

export const routes = [
    {
        path:"/",
        component :Home
    },
    {
        path:"/about",
        component: About
    },
    {
        path:"/properties",
        component:Properties
    }
]
