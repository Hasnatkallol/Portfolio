import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ProjectDetails from "../Pages/MyProject/ProjectDetails";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "projectdetails/:id",
         loader:() => fetch('/projects.json'),
        Component: ProjectDetails,
      },
    ],
  },
]);
