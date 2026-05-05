import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import { RootLayout } from "@/layouts";
import { HomePage, AboutPage, SkillsPage, ContactPage } from "@/pages";

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
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
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
