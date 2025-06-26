import SidebarItems from './SidebarItems';
import { Link } from 'react-router-dom';
const Sidebar=()=>{
    return(
        <div className="h-80 w-1/5 bg-gray-500">
            <ul>
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                   <Link to='/history'>History</Link>  
                </li>
                <li>
                  <Link to='/watch'>Watch </Link>  
                </li>
                <li>
                  <Link to='/test'>Test </Link>  
                </li>
                <li>
                  <Link to='/demo'>Demo</Link>
                </li>
            </ul>
            <SidebarItems/>
        </div>
    )
}
export default Sidebar;