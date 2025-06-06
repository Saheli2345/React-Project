const Cards=({data})=>{
    return(
        <div className="mx-4 my-2 border">
           <img  className="border rounded-xl mx-6" src={data?.snippet?.thumbnails?.medium?.url} alt="Navigation-bar"/>
           <h3 className="my-1 mx-8 text-wrap w-64">{data?.snippet?.title}</h3>
           <h5 className="mx-8 text-wrap w-64 font-medium">{data?.snippet?.channelTitle}</h5>
        </div>
    )
}
export const CardsHOC=({data})=>{
    return(
        <div className="border border-black"> <Cards data={data}/> </div>
    )
}
export default Cards;