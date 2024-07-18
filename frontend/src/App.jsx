import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { CreateQn } from "./components/ui/qnadd";
export default function Home() {
  const [val, setVal] = useState("");

  function reset() {
    setVal("");
  }

  return (
    <div className="m-10">
      <div>
      <Input
        placeholder="Enter the Title"
        className="h-10 max-w-[800px]"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      /> <Input
      placeholder="Enter the description"
      className="h-20 max-w-[800px]"
      value={val}
      onChange={(e) => setVal(e.target.value)}
    />
      </div>
     
      <Button onClick={reset}>click me</Button>
      <CreateQn></CreateQn>
    </div>
  );
}
