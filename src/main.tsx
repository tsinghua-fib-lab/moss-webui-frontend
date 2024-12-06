import ReactDOM from 'react-dom/client'
import "./main.css";
import App from "./App";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from 'antd/locale/zh_CN';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={zhCN}>
        <RouterProvider router={router} />
    </ConfigProvider>,
)
