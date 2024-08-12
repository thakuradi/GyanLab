import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "./input";
export function AddAns() {
  
  const [filter, setFilter] = useSearchParams();
  const id = filter.get("id")
  const  question = filter.get("question")
  const [ans, setAns] = useState("");
  const reset = () => {
    setAns(""); 
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/account/answers",
        {
          answer: ans,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
          "question-id":id
        }
      );
      reset();
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    
    <div className="container mx-auto p-4">
        <Card>
  <CardHeader >
    <CardTitle  className=" flex justify-center" >Welcome to Gyan Lab</CardTitle>
    <CardTitle>{question}</CardTitle>
  </CardHeader>
  <CardContent>
 
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="question">Answer</Label>
              <Input
                onChange={(e) => {
                  setAns(e.target.value);
                }}
                placeholder="Enter Your Answer"
              />
            </div>
          </div>
  </CardContent>
  <CardFooter className=" flex justify-center" >
  <Button  onClick={handleSubmit} >
            Submit
          </Button>
  </CardFooter>
</Card>
    </div>
  );
}

