import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");

  function reset() {
    setVal("");
  }

  return (
    <div className="m-10">
      <Input
        placeholder=""
        className="h-20 max-w-[800px]"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Button onClick={reset}>click me</Button>
    </div>
  );
}
