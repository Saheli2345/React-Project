import Sidebar from './Sidebar';
import InnerContainer from './InnerContainer';
const MainContainer=()=>{
    return(
        <div className="flex">
            <Sidebar/>
            <InnerContainer/>            
        </div>
    )
}
export default MainContainer;