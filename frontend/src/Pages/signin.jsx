import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
                <Input id="name" placeholder="Enter the Email" />
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input id="password" placeholder="Enter the password" />
              </div>  
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">   
          <Button >
            <Link to={"/signup"}>Sign In</Link></Button>
        </CardFooter>
      </Card>
    </div>
  );
}
