import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Component/Home/Home";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Read from "../Pages/Read/Read";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/read",
        loader: () => fetch("booksData.json"),
        Component: Read,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
