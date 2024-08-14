import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useAuth } from '../AuthContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        name: name,
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      navigate("/qnans");
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="items-center">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Welcome to GyanLab</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name " />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} placeholder="Enter the Email" />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="block text-sm mb-2 dark:text-white">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} placeholder="Enter the password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSignUp} label={"Sign up"}>Sign Up</Button>
        </CardFooter>
        <div className="flex justify-center">Already Have an Account? <Link className="font-normal md:font-bold ..." to="/signin">SignIn</Link></div>
      </Card>
    </div>
  );
}