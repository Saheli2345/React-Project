import { useEffect, useState } from "react";
import Button from "./Button";
import Cards from "./Cards";
import { API_KEY } from "../Utils/Constant";
import { API_URI_YT } from "../Utils/Constant";
import ShimmerCards from "./ShimmerCards";
import Shimmer from "./Shimmer";

const InnerContainer=()=>{
    const [apiData,setApiData]=useState([]);
    useEffect(()=>{
    getApi()
    },[])
    const getApi=async ()=>{
        const response=await fetch(API_URI_YT)
        const youtubeResponse=await response.json()
        //console.log(youtubeResponse)
        setApiData(youtubeResponse.items)
    }
    if(!apiData.length) return <Shimmer/>
    return(
    <div className="bg-slate-200 w-4/5">
        <Button/>
       <div className="flex flex-wrap">
        {
            apiData.map((items)=>{
              return(
                <Cards data={items}/>
              )
            })
        }
      </div>
    </div>
    )
}
export default InnerContainer;