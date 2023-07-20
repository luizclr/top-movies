import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Base from "~/pages/base/base";
import { Login } from "~/pages/login/login.container";
import { PATHS } from "~/routes/paths";
import { PrivateRoute } from "~/routes/private-route";

const Movies = lazy(async () => await import("~/pages/movies/movies"));
const Movie = lazy(async () => await import("~/pages/movie/movie"));

export const router = createBrowserRouter([
  {
    path: PATHS.LOGIN,
    element: <Login />,
    index: true,
  },
  {
    path: PATHS.HOME,
    element: <Base />,
    children: [
      {
        path: PATHS.HOME,
        element: <PrivateRoute outlet={<Movies />} />,
      },
      {
        path: PATHS.MOVIE,
        element: <PrivateRoute outlet={<Movie />} />,
      },
    ],
  },
]);
