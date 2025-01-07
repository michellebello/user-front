import Register from "./components/Register";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

export default App;
