export const routes = [
  {
    path: "/",
    element: () => import("@/pages/HomePage").then((m) => m.default),
  },
];
