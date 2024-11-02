import { createBrowserRouter} from "react-router-dom"
import Home from '../page'

export const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
    children: [
        {path: "", element: <}
    ]
}
])