import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DisplayQnANs() {
  const [qn, setQn] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/account/userquestion",
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log("API response:", JSON.stringify(response.data, null, 2));
        setQn(response.data.question);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Questions</CardTitle>
        </CardHeader>
        <CardContent>
          {qn.length > 0 ? (
            qn.map((question, index) => (
              <Qn key={question._id || index} question={question} />
            ))
          ) : (
            <p>No questions found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Qn({ question }) {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

  console.log("Question object:", JSON.stringify(question, null, 2));
  console.log("Question image:", question.image);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const hasImage =
    question.image && question.image !== "undefined" && question.image !== null;

  return (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <p className="text-lg font-semibold">{question.question}</p>
      <div className="mt-2 space-x-2">
        <Button
          onClick={() =>
            navigate(
              "/ans?id=" + question._id + "&question=" + question.question
            )
          }
        >
          Ans
        </Button>
        {hasImage && (
          <Button onClick={() => window.open(
                `http://localhost:3000/uploads/${question.image}`,
                "_blank")
            }>
            {showImage ? "Hide Image" : "View Image"}
          </Button>
        )}
      </div>
      {showImage && hasImage && (
        <div className="mt-4 aspect-w-16 aspect-h-9">
          <img
            src={`http://localhost:3000/uploads/${question.image}`}
            alt="Question image"
            className="object-contain w-full h-full rounded-md"
          />
        </div>
      )}
    </div>
  );
}
