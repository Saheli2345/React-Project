import { Link } from "react-router-dom";

const Logo=()=>{
    return(
        <div>
          <Link to="/">
            <img className="h-12 w-25 ml-[2.3rem] mr-[11.6rem] my-2" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png" alt="navigation icon"/>
          </Link>
        </div>
    );    
};
export default Logo;