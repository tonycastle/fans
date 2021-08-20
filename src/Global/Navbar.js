import NavLink from "./NavLink";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navBar">
      <NavLink active page="Home" Icon={HomeIcon} />
      <NavLink page="Explore" Icon={SearchIcon} />
      <NavLink page="Notifications" Icon={NotificationsNoneIcon} />
      <NavLink page="Messages" Icon={MailOutlineIcon} />
      <NavLink page="Bookmarks" Icon={BookmarkBorderIcon} />
      <NavLink page="Lists" Icon={ListAltIcon} />
      <NavLink page="Subscriptions" Icon={SubscriptionsOutlinedIcon} />
      <NavLink page="My profile" Icon={PermIdentityIcon} />
      <NavLink page="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="navBar-new-post" fullWidth>
        new post
      </Button>
    </div>
  );
};

export default Navbar;
