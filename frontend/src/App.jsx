import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { CreateQn } from "./components/ui/qnadd";
export default function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  function reset() {
    setTitle("");
    setDescription("")
  }

  return (
    <div className="m-10">
      <div>
      <Input
        placeholder="Enter the Title"
        className="h-10 max-w-[800px]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> <Input
      placeholder="Enter the description"
      className="h-20 max-w-[800px]"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
      </div>
     
      <Button onClick={reset}>click me</Button>
    </div>
  );
}
