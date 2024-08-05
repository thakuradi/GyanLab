
import React, { useState,useEffect } from 'react';
import axios from 'axios';
export function DisplayQnANs() {
  const[qn,setQn]=useState([])
  const [ans,setAns]=useState([])
  const [Filter,setFilter]=useState("")
  useEffect(()=>{
  axios.get("http://localhost:3000/api/v1/account/userquestion",{
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  .then(function(response){ 
    setQn(response.data.question)
  })
},[])
  return <div> 
    {qn.map((question,index)=><Qn key={index} question={question}/>)}
    </div>

}
function Qn({question}){
  return <div>
    {question.question}
  </div>
}
