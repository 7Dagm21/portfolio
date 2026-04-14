import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => import("@/pages/HomePage").then((m) => ({ Component: m.default })),
  },
];

export const router = createBrowserRouter(routes);
