import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { DisplayAns } from './displayAns';
import { Button } from './button';
export function DisplayQnANs() {
  const [qn, setQn] = useState([]);
  const [Filter, setFilter] = useState("");


  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/account/userquestion", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(function (response) { 
      setQn(response.data.question);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        {qn.map((question, index) => (
          <Qn key={index} question={question} />
        ))}
      </div>
    </div>
  );
}

function Qn({ question }) {
  const navigate=useNavigate()
  return (
    <div className="border-b border-gray-200 py-4">
    <p className="text-lg font-semibold">{question.question} </p> 
    <Button onClick={(e)=>{
      navigate("/ans?id="+question._id+"&question="+question.question)
    }} label={"ans"} >Ans</Button> 
    </div>
  );
}
