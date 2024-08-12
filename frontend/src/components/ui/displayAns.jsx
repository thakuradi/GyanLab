import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { AddAns } from './ansadd';
export function DisplayAns() {
  const [qn, setQn] = useState([]);
  const [filter, setFilter] = useSearchParams();
  const id = filter.get("id")
 

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/account/answer", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "id":id
      },
    })
    .then(function (response) { 
      setQn(response.data.answers);
    });
  }, []);


  return (
    <div className="container mx-auto p-4">
      <AddAns></AddAns>
      <div className="bg-white shadow-md rounded-lg p-6">
        {qn.map((ans,index) => (
          <Qn  key={index} answer={ans} />
        ))}
      </div>
    </div>
  );
}


function Qn({ answer }) {
  return (
    <div className="border-b border-gray-200 py-4">
 
      <p className="text-lg font-semibold">{answer}</p>
    </div>
  );
}

