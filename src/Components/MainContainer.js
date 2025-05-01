import Button from './Button';
import Cards from './Cards'; 
import Sidebar from './Sidebar';
const MainContainer=()=>{
    return(
        <div>
            <span>MainContainer Component</span>
            <Cards/>
            <Button/>
            <Sidebar/>
        </div>
    )
}
export default MainContainer;