import { Link } from "react-router-dom";
import { useContext } from "react";
import NavLink from "./NavLink";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
//import SearchIcon from "@material-ui/icons/Search";
//import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
//import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
//import ListAltIcon from "@material-ui/icons/ListAlt";
//import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
//import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Button } from "@material-ui/core";
import "./navBar.css";
import { AuthContext } from "../../contexts/auth-context";
import { setAuthToken } from "../../setAuthTokenHeader";

const Navbar = () => {
  const { User, setLoginStatus } = useContext(AuthContext);

  const logout = () => {
    //delete JWT token
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    //setLogin Status to
    setAuthToken(false);
    setLoginStatus({
      userId: null,
      tokenExpiration: "",
    });
  };

  return (
    <div className="navBar">
      <Avatar src="/broken-image.jpg" className="avatar">
        {User.display_name}
      </Avatar>
      <NavLink
        activeOnlyWhenExact={true}
        page="Home"
        Icon={HomeOutlinedIcon}
        to="/homepage"
      />
      {/*  <NavLink
        page="Notifications"
        Icon={NotificationsNoneIcon}
        to="/notifications"
      /> */}
      <NavLink page="Messages" Icon={MailOutlineIcon} to="/messages" />
      {/*  <NavLink page="Bookmarks" Icon={BookmarkBorderIcon} to="/bookmarks" /> */}
      {/*  <NavLink page="Lists" Icon={ListAltIcon} to="/lists" /> */}
      {/* <NavLink
        page="Subscriptions"
        Icon={SubscriptionsOutlinedIcon}
        to="/subscriptions"
      /> */}
      <NavLink page="My profile" Icon={PermIdentityIcon} to="/settings" />
      <Button variant="text" onClick={logout}>
        Log out
      </Button>
      {/*  <NavLink page="More" Icon={MoreHorizIcon} to="more" /> */}
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
