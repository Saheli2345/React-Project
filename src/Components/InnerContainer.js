import { useEffect, useState } from "react";
import Button from "./Button";
import Cards, { CardsHOC } from "./Cards";
import { API_KEY } from "../Utils/Constant";
import { API_URI_YT } from "../Utils/Constant";
import ShimmerCards from "./ShimmerCards";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';


const InnerContainer=()=>{
    const [apiData,setApiData]=useState([]);
    useEffect(()=>{
    getApi()
    },[])
    const getApi=async ()=>{
        const response=await fetch(API_URI_YT)
        const youtubeResponse=await response.json()
       // console.log(youtubeResponse.items)
        setApiData(youtubeResponse.items)
    }
    if(!apiData.length) return <Shimmer/>
    return(
    <div className="bg-slate-200 w-4/5">
        <Button/>
       <div className="flex flex-wrap">
         {/* {apiData.length?<CardsHOC data={apiData[0]}/>:""}*/}
         {apiData.length && <CardsHOC data={apiData[0]}/>}
        {
            apiData.map((items)=>{
              return(
                
                <Link to={"/watch?v="+items.id}>
                  <Cards data={items} key={items.id}/>
                </Link>
              )
            })
        }
      </div>
    </div>
    )
}
export default InnerContainer;