"use server"
import fs from "fs/promises"


//output will appear in chhaya.text file
export const submitAction= async(e)=>{
    
    console.log(e.get("name",e.get("add")))
  let a =await fs.writeFile("Chhaya.txt",`Name is ${e.get("name")} and address is ${e.get("add")}`)
  
  console.log(a)
  }



