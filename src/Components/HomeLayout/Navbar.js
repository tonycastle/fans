import { Link } from "react-router-dom";
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
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Button } from "@material-ui/core";
import "./navBar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <Avatar src="/broken-image.jpg" className="avatar">
        T
      </Avatar>
      <NavLink
        activeOnlyWhenExact={true}
        page="Home"
        Icon={HomeIcon}
        to="/profile"
      />
      <NavLink page="Explore" Icon={SearchIcon} to="/explore" />
      <NavLink
        page="Notifications"
        Icon={NotificationsNoneIcon}
        to="/notifications"
      />
      <NavLink page="Messages" Icon={MailOutlineIcon} to="/messages" />
      <NavLink page="Bookmarks" Icon={BookmarkBorderIcon} to="/bookmarks" />
      <NavLink page="Lists" Icon={ListAltIcon} to="/lists" />
      <NavLink
        page="Subscriptions"
        Icon={SubscriptionsOutlinedIcon}
        to="/subscriptions"
      />
      <NavLink page="My profile" Icon={PermIdentityIcon} to="/settings" />
      <NavLink page="More" Icon={MoreHorizIcon} to="more" />
      <Button
        variant="text"
        className="navBar-new-post"
        fullWidth
        startIcon={<AddIcon />}
        component={Link}
        to="/create-post"
      >
        new post
      </Button>
    </div>
  );
};

export default Navbar;