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

function reset() {
  setQn("");

}
export function AddingQuestion() {
  const [qn, setQn] = useState("");
  return (
    <div>
      <Card>
        <CardHeader>
          <div className=" flex justify-center">Welcome to Gyan Lab</div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="question">Question</Label>
              <Input
                onChange={(e) => {
                  setQn(e.target.value);
                }}
                placeholder="Enter Your Question"
              />
            </div>
          </div>
        </CardHeader>
        <CardFooter className=" flex justify-center">
          <Button
            onClick={async () => {
              useEffect(() => {
                axios
                  .post(
                    "http://localhost:3000/api/v1/account/questions",
                    {
                      question: qn,
                    },
                    {
                      headers: {
                        authorization:
                          "Bearer " + localStorage.getItem("token"),
                      },
                    }
                  )
                  .then(function (response) {
                    setQn(response.data.question);
                  });
              }, []);
            }}

          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
