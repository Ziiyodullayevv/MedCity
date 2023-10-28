import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SingIn";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>

        <Route exact path="/home" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>Not fonund 404</h1>} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
