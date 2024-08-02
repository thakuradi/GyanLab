import { useState } from "react";
import { QnAns } from "./Pages/QnAns";
import { Signup } from "./Pages/signup";
import { Signin } from "./Pages/signin";
import {BrowserRouter,Route,Routes} from "react-router-dom";
export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/qnans" element={<QnAns/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
