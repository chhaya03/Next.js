
"use client"
import { useState } from "react";



export default function Home() {

const [count,setCount]=useState(0);

  return (
    
    <div>
      <p>I am a component {count}</p><br></br>
      <button className="h-10 w-15 border-4 border-red-600 " onClick={()=>setCount(count+1)}>Click me </button>
    </div>
    
  );
}
