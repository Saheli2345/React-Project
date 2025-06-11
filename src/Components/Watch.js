/*/watch?v=123456--query parameter/search parameter     hook=useSearchParames
/watch/12345=ID parameter   hook=useParams*/
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";

const Watch=()=>{
    const [searchParams]=useSearchParams();
    const videoId=searchParams.get("v");
    console.log(videoId);
    return(
        <div className="p-4 w-full">
            <div className="w-full flex justify-center">
                <iframe className="rounded-lg" 
                width="80%" height="500" 
                src={`https://www.youtube.com/embed/${videoId}`}
                 title="YouTube Video Player" 
                 allowFullScreen>
                </iframe>

            </div>
        </div>
    );
};