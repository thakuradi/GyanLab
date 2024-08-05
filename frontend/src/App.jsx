import { useState } from "react";
import { QnAns } from "./Pages/QnAns";
import { Signup } from "./Pages/signup";
import { Signin } from "./Pages/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import axios from "axios";
export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/qnans" element={<QnAns />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
