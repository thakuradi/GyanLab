import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader  className="items-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Welcome to GyanLab
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input  onChange={(e) => {
                    setEmail(e.target.value);}} id="name" placeholder="Enter the Email" />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input  onChange={(e) => {
                    setPassword(e.target.value);
                  }}id="password" placeholder="Enter the password" />
              </div>  
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">   
          <Button onClick={async () => {
             const response= await axios
                .post("http://localhost:3000/api/v1/user/signin", {
                  email: email,
                  password: password,
                })
            localStorage.setItem("token",response.data.token)
            navigate("/qnans")
            }}
            label={"Sign in"}>Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
