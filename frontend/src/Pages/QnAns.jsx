

  import React, { useState,useEffect } from 'react';
  import axios from 'axios';
  import {Input} from "../components/ui/input"
  function reset() {
    setTitle("");
    setDescription("")
  }
  import { Label } from '@/components/ui/label';
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
  
  export function QnAns({qnans}) {
    return <div> 
        <Card >
            <CardHeader >
                <div className=' flex justify-center'>Welcome to Gyan Lab</div>
                <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="question">Question</Label>
                <Input id="question" placeholder="Enter Your Question" />
              </div>  
            </div>
            </CardHeader>
            <CardFooter className=" flex justify-center">
                <Button >Submit</Button>
            </CardFooter>
        </Card>
     
      </div>
  }
  function Qn({question}){
    return <div>
      {question}
    </div>
  }
  function getdata(qnans){
    const[qn,setQn]=useState([])
    const [ans,setAns]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/question")
    .then(function(response){ 
      setQn(response.data.qn)
    })
  },[])
  return 
  <div>

  </div>
  }
  