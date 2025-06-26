import React, { useMemo, useState } from "react";
import findNthPrime from "../Utils/checkPrime";
const Test=()=>{
    const[val,setVal]=useState(1);
    const[counter,setCounter]=useState(0);
    console.log("Test Rendered...")
    const value=useMemo(()=>findNthPrime(val),[val])
    return(
        <div className="bg-gray-400 text-black border-blue-700 p-2 m-5 w-96 h-96">
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <h1 className="font-bold text-xl">Prime Value: {value}</h1>
            <h2 className="font-bold text-xl">Value: {counter}</h2>
            <button className="p-2 m-2 bg-green-400 text-black border-green-400 rounded-xl" onClick={()=>setCounter(counter+1)}>Hit me!!</button>

        </div>
    )    
}
export default Test