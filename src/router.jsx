import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import SomethingWrong from "./components/ui/SomethingWrong";
import NotFoundPage from "./pages/NotFoundPage";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MoviePage />,
        errorElement: <SomethingWrong />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
