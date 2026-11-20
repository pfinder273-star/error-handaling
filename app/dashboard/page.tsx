"use client";
import { useState} from "react";

export default function Home(){
   const[ id,setid]= useState("");

   async function getStudent(){
    try{
      const res = await fetch(
        `/api/student?id=${encodeURIComponent(id)}`
      );
      const data =await res.json();

      if (!res.ok){
         throw new Error(data.error);

      }
      setMessage(`Student Name: ${data.name}`);
    }
    catch(error){
      setMessage(error
      );
    }
   }
}

return(
  <div>
    <h2> Student SEARch
    </h2>
    <input 
    type ="text"
    placeholder = "Enter Student ID"
    value={ id}
    onChange={(e) => setid(e.target.value)}/>
    <button onClick={getStudent}>Search</button>
    <p>{message}</p>    
  </div>
)