import {useState} from 'react'
import './App.css'
import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "../components/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home/>
        ),
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
