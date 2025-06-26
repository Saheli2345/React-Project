/*watch?v=123456--query parameter/search parameter     hook=useSearchParames
/watch/12345=ID parameter   hook=useParams*/
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const [vId, setvId] = useState([]);
  const [loading, setLoading] = useState(true);

  const isIdValid = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyB10_V2SeFcQ8mlgOc6cXvGQAwDBIpkwk0&part=snippet`);
    const jsonResponse = await response.json();
    return jsonResponse.items;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await isIdValid();
      setvId(data); 
      setLoading(false);
    };
    if (videoId) fetchData();
  }, [videoId]);

  const validVideoId = /^[a-zA-Z0-9_-]{11}$/.test(videoId);

  if (!videoId) return <div>No video selected</div>;
  if (loading) return <div>Loading...</div>;
  if (!validVideoId || vId.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold mb-4">This video isn't available anymore</h1>
      {/*<button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => (window.location.href = '/')}
        >
          GO TO HOME
        </button>*/}
      </div>
    );
  }

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
// postman  is a clind service