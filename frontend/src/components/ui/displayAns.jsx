import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
export function DisplayAns() {
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
        {qn.map((answer) => (
          <Qn key={answer._id} answer={answer} />
        ))}
      </div>
    </div>
  );
}


function Qn({ answer }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id")
  const  question = searchParams.get("question")
  return (
    <div className="border-b border-gray-200 py-4">
      <h1 className="text-lg font-semibold">{question}</h1>
      <p className="text-lg font-semibold">{answer.answer}</p>
    </div>
  );
}

