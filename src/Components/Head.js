import HamburgerIcon from './HamburgerIcon';
import Logo from './Logo';
import SearchBox from './SearchBox';
import UserIcon from './UserIcon';
const Head=()=>{
    return(
        <div className="flex items-center">
            <HamburgerIcon/>
            <Logo/>
            <SearchBox/>
            <UserIcon/>
        </div>
    )
}
export default Head;