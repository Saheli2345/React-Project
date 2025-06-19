/*watch?v=123456--query parameter/search parameter     hook=useSearchParames
/watch/12345=ID parameter   hook=useParams*/
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const[vId,setvId]=useState('');

  const [searchParams] = useSearchParams();
  console.log(useSearchParams());
  const videoId = searchParams.get('v');
  console.log(videoId);
 
  const isIdValid=async()=>{
    
    const response=await fetch("https://www.googleapis.com/youtube/v3/videos?id=NZbmcl0QUaU&key=AIzaSyB10_V2SeFcQ8mlgOc6cXvGQAwDBIpkwk0")
    const jsonResponse=await response.json();
    //console.log(jsonResponse);
    return jsonResponse.items;
  }
  useEffect(()=>{
   setvId(isIdValid());
   console.log(vId)
  },[])
  
  console.log(isIdValid());
  //const validVideoId=/^[a-zA-Z0-9_-]{11}$/.test(videoId);//regular expression 
  if (!videoId) return <div>No video selected</div>;
  //if (!validVideoId) return <div className="text-center">This video isn't availavle any more</div>;
  return (
    <div className="p-4 w-full">
      <div className="w-full flex justify-center">
        <iframe
          width="80%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}  
          title="YouTube Video Player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
//javascript is a syncronus single threaded programming language
//syncronus fuction return any from of value or function
// asycronus fuction return promise(object)
