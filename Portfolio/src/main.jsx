import React from "react";

import App from "./App.jsx";
import "./index.css";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RickMortyCards from "./components/RickMortyCards.jsx";
import Convertor from "./components/Convertor.jsx";

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemones",
    element: <div></div>,
  },
  {
    path: "/rickAndMorty",
    element: (
      <div>
        <RickMortyCards />
      </div>
    ),
  },
  {
    path: "/convertor",
    element: (
      <div>
        <Convertor />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
