import Demo from "./pages/Demo";
import Home from "./pages/Home";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Home,
  },
  { path: "/demo", Component: Demo },
];
