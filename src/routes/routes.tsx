import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import { RootLayout } from "@/layouts";
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ContactPage,
  ProjectsPage,
  ServicesPage,
} from "@/pages";

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
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
