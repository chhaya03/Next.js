
"use client"


export default function Home() {

  const handleClick =async()=>{
let data ={
  name:"chhaya",
  role:"coder"
}

    let a =await fetch("/api/add",{
      method:"POST" ,headers:{
        "content-Type" :"application/json",
      },
      body:JSON.stringify(data),
    })
    let res=await a.json()
         console.log(res)
  }

  return (
  <div>
    <h1 className ="text-xl font-bold">Next.js Api routes demo</h1>
    <button className="h-10 w-20 border-red-600 border-2" onClick={handleClick}>Click Me</button>
  </div>
  );
}
