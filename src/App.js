import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"
    const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
        const [userName, setUserName] = useState();
            useEffect(()=>{
        //after successful authorization, we have userInfo
        const data = {
            name: "Sathish Kumar"
        }
        setUserName(data.name)
    },[])
    return (
        <Provider store={appStore}>
        <userContext.Provider value={{name: userName}}>
        <div className="">
            <Header />
            <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
    )
}

let routerConfig = createBrowserRouter([{
    path:"/",
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <Body/>,
        },
        {
            path: "/about",
            element: <AboutUs/>,
        },{
            path: "/contact",
            element: <Contact/>,
        },
        {
            path: "/grocery",
            element: <Suspense fallback= {<div><h1>Loading...</h1></div>}><Grocery/></Suspense>
        },{
            path: "/cart",
            element: <Cart/>,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>,
        }
    ],
    errorElement: <Error/>
},])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig}/>);