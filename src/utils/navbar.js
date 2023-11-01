import { lazy } from "react";
import React from "react";
import Spiner from "../components/Spiner";

// React.lazy pages:
const Home = lazy(() => import("../pages/HomePage"));

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Spiner />
          </React.Fragment>
        }
      >
        <Home />
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <h1>How are you</h1>
          </React.Fragment>
        }
      >
        <h1>Home 2</h1>
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: 3,
    title: "Doctors",
    path: "/doctors",
    element: <h1>Hello 3</h1>,
    private: false,
    hidden: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    element: <h1>Hello 4</h1>,
    private: false,
    hidden: false,
  },
  {
    id: 5,
    title: "Shop",
    path: "/shop",
    element: <h1>Hello 5</h1>,
    private: false,
    hidden: false,
  },
  {
    id: 6,
    title: "Contacts",
    path: "/contacts",
    element: <h1>Hello 6</h1>,
    private: false,
    hidden: false,
  },
  //   {
  //     id: 4,
  //     title: "Sing In",
  //     path: "/singin",
  //     element: <SignIn />,
  //     private: false,
  //     hidden: false,
  //   },
];
