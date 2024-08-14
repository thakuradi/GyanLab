import { useState } from "react";
import { QnAns } from "./Pages/QnAns";
import { Signup } from "./Pages/signup";
import { Signin } from "./Pages/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ans } from "./Pages/Ans";
import { HomePage } from "./Pages/homePage";
import { AuthProvider } from "./AuthContext";
// import Navbar from "@/components/ui/navbar";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Navbar />  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/qnans" element={<QnAns />} />
          <Route path="/ans" element={<Ans />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}