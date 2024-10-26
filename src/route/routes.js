import MainLayout from "@/layout/MainLayout"


const { createBrowserRouter } = require("react-router-dom")

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
    }
])