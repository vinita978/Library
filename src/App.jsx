import "./App.css";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBook from "./components/AddBook.jsx"
import NotFound from "./components/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header /><Home /></>,
    errorElement: <NotFound />,
  },
  {
    path: "/BrowseBooks",
    element: <><Header /><BrowseBooks /></>,
  },
   {
    path: "/AddBook",
    element: <><Header /><AddBook /></>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
