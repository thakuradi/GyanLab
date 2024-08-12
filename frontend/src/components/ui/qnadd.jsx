import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "./input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export function AddingQuestion() {
  const [qn, setQn] = useState("");
  const reset = () => {
    setQn(""); 
  };
  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/account/questions",
        {
          question: qn,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      reset();
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <div className=" flex justify-center">Welcome to Gyan Lab <Button></Button></div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="question">Question</Label>
              <Input
                onChange={(e) => {
                  setQn(e.target.value);
                }}
                placeholder="Enter Your Question"
              />
              <input></input>
            </div>
          </div>
        </CardHeader>
        <CardFooter className=" flex justify-center">
          <Button  onClick={handleSubmit} >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
