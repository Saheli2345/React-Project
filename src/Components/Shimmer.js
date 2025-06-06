import ShimmerCards from "./ShimmerCards";

const Shimmer=()=>{
    const shimmerItems=[1,2,3,4,5,6,7]
    return(
      <div className="flex flex-wrap mx-8">
        {shimmerItems.map((items,index)=>{
            return(
                <ShimmerCards key={index}/>
            )
         }
        )}
      </div>
    )
}
export default Shimmer;