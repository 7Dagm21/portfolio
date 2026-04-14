import { AboutPage, HomePage } from "@/pages";
import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    index: true,
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/users",
    element: <p>Users page</p>,
    children: [
      {
        // nested pages goes here
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
