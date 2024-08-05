import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import axios from "axios";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <Input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Onkar "
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter the Email"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter the password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={async () => {
             const response= await axios
                .post("http://localhost:3000/api/v1/user/signup", {
                  name: name,
                  email: email,
                  password: password,
                })
            localStorage.setItem("token",response.data.token)
            }}
            label={"Sign up"}
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
