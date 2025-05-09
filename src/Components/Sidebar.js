import SidebarItems from './SidebarItems';
const Sidebar=()=>{
    return(
        <div className="h-80 w-1/5 bg-gray-500">
            <ul>
                <li>
                    Home
                </li>
                <li>
                   Sports
                </li>
                <li>
                  News
                </li>
            </ul>
            <SidebarItems/>
        </div>
    )
}
export default Sidebar;