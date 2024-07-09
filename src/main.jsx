import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/error-page";
import Root from "./routes/layourt";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PartenairProvider from "./composants/PartenairProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PartenairProvider>
      <RouterProvider router={router} />
    </PartenairProvider>
  </React.StrictMode>
);
