import { useMemo, useState } from "react";
import PostDisplay from "./PostDisplay";
import { useFetchData } from "../../hooks/useFetchData";
import { Button } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
//import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import InstagramIcon from "@material-ui/icons/Instagram";
import ShareIcon from "@material-ui/icons/Share";
//import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
//import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./profile.css";

const Profile = () => {
  const [bookmark, setBookmark] = useState(false);

  // a profile page is bulit up from their user document and
  // their posts so we get both. baesd on uerId from realfans/profile/:user_id

  const profileId = useMemo(
    () => ({
      _id: 123456,
    }),
    []
  );

  const [user, userError, userIsLoading] = useFetchData(
    "api/users/getother",
    profileId
  );

  //bookmarks are just a userid added to the viewprofile url.
  const addBookmark = () => {
    //toggle the icon
    setBookmark(!bookmark);
  };

  const addSubscription = () => {
    //do some subscribing blah blah
  };

  return (
    <div className="profileContent">
      <div className="coverPicture">
        {user.coverPicture !== "" && (
          <img
            src={`images/${user.coverPicture}`}
            alt=""
            className="coverPic"
          />
        )}

        {user.profilePicture !== "" && (
          <img
            src={`images/${user.profilePicture}`}
            alt=""
            className="profilePic"
          />
        )}
      </div>
      <div className="buttonContainer">
        {bookmark ? (
          <StarIcon className="buttonIcons" onClick={addBookmark} />
        ) : (
          <StarBorderIcon className="buttonIcons" onClick={addBookmark} />
        )}
        <ShareIcon className="buttonIcons" />
      </div>
      <h3>{user.display_name}</h3>
      <p>{user.bio}</p>
      <div className="subscribe">
        <h3>Subscriptions</h3>
        <Button
          to="/addcard"
          variant="contained"
          className="subscribeButton"
          onClick={addSubscription}
        >
          Subscribe
        </Button>
      </div>
      <PostDisplay />
    </div>
  );
};

export default Profile;
