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
import { Avatar, Button } from "@material-ui/core";
import "./navBar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className="avatar">
        T
      </Avatar>
      <NavLink active page="Home" Icon={HomeIcon} target="/" />
      <NavLink page="Explore" Icon={SearchIcon} target="explore" />
      <NavLink
        page="Notifications"
        Icon={NotificationsNoneIcon}
        target="/notifications"
      />
      <NavLink page="Messages" Icon={MailOutlineIcon} target="/messages" />
      <NavLink page="Bookmarks" Icon={BookmarkBorderIcon} target="/bookmarks" />
      <NavLink page="Lists" Icon={ListAltIcon} target="/lists" />
      <NavLink
        page="Subscriptions"
        Icon={SubscriptionsOutlinedIcon}
        target="/subscriptions"
      />
      <NavLink page="My profile" Icon={PermIdentityIcon} target="/settings" />
      <NavLink page="More" Icon={MoreHorizIcon} target="more" />
      <Button variant="outlined" className="navBar-new-post" fullWidth>
        new post
      </Button>
    </div>
  );
};

export default Navbar;
