import NavLink from "./NavLink"
import { MdHome , MdMailOutline, MdNotificationsNone, MdBookmarkBorder, MdList, MdPersonAdd, MdPersonOutline , MdMore } from 'react-icons/md';

const Navbar = () => {
    return (
        <div>
            Welcome to the new Only Fans
            <NavLink active page="Home" Icon={MdHome}/>
            <NavLink page="Notifications" Icon={MdNotificationsNone}/>
            <NavLink page="Messages" Icon={MdMailOutline}/>
            <NavLink page="Bookmarks" Icon={MdBookmarkBorder}/>
            <NavLink page="Lists" Icon={MdList}/>
            <NavLink page="Subscriptions" Icon={MdPersonAdd}/>
            <NavLink page="My profile" Icon={MdPersonOutline}/>
            <NavLink page="More" Icon={MdMore}/>
        </div>
    )
}

export default Navbar
