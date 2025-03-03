"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {

  const ref =useRef()

// const submitAction= async(e)=>{
//   "use server"

//   console.log(e.get("name",e.get("add")))
// let a =await fs.writeFile("Chhaya.txt",`Name is ${e.get("name")} and address is ${e.get("add")}`)

// console.log(a)
// }



//output will appear in chhaya.text file

  return (
    <div className="w-2/3 mx-auto my-12">
      <form action={(e) =>{submitAction(e); ref.current.reset()}} ref={ref} >

<div>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" className="text-white mx-4 border-2 border-white" />
</div>
<div>
  <label htmlFor="add">Address</label>
  <input type="text" name="add" id="add" className="text-white mx-4 border-2 border-white" />
</div>
<div>
  <button className="border border-white px-3 my-5 ml-10">Submit</button>
</div>
      </form>
     
    </div>
  );
}
