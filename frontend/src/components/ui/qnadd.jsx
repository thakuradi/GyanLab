import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
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
import { ImageUpload } from "@/components/ui/imageupload";
import { Loader2 } from "lucide-react";

export function AddingQuestion() {
  const [qn, setQn] = useState("");
  const [image, setImage] = useState(null);
  const [addedQuestion, setAddedQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const reset = () => {
    setQn("");
    setImage(null);
    setAddedQuestion(null);
    setError(null);
  };

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("question", qn);
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/account/questions",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setAddedQuestion(response.data.question);
      reset();
    } catch (error) {
      console.error("Error submitting question:", error);
      setError("Failed to submit question. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to Gyan Lab
          </CardTitle>
          <CardDescription className="text-center">
            Ask your question and upload an image
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              value={qn}
              onChange={(e) => setQn(e.target.value)}
              placeholder="Enter Your Question"
            />
          </div>
          <ImageUpload onImageUpload={handleImageUpload} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </CardFooter>
      </Card>

      {error && (
        <div className="mt-4 max-w-2xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>{error}</p>
        </div>
      )}

      {addedQuestion && (
        <Card className="mt-4 w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Added Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">{addedQuestion.question}</p>
            {addedQuestion.image && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`http://localhost:3000/uploads/${addedQuestion.image}`}
                  alt="Uploaded image"
                  className="object-contain w-full h-full rounded-md"
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
