import Register from "./components/Register";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import SuccessPage from "./components/SucessPage";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/success", element: <SuccessPage /> },
]);

export default App;
