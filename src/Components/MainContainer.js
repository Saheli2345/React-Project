import Sidebar from './Sidebar';
import InnerContainer from './InnerContainer';
import { Outlet } from 'react-router-dom';
const MainContainer=()=>{
    return(
        <div className="flex">
            <Sidebar/>
            <Outlet/>            
        </div>
    )
}
export default MainContainer;