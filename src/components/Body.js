import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router'
const Body = () => {

    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

   

    console.log("body component render")
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body