import { useFetchData } from "../../hooks/useFetchData";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
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
import ProfilePostList from "./ProfilePostList";

const Profile = () => {
  console.log("rendered");

  const [isBookmarked, setIsBookmarked] = useState(false);

  const { id } = useParams();
  const userId = useMemo(() => ({ id: id }), [id]);

  //get User details
  const [user, setUser, userError, userIsLoading] = useFetchData(
    "/api/users/getother",
    userId
  );
  console.log(user);

  //get Users posts
  const [Posts, setPosts, PostErrors, PostsAreLoading] = useFetchData(
    "/api/posts/allpostsfromuser",
    userId
  );

  //bookmarks are just a userid added to the viewprofile url.
  const toggleBookmark = () => {
    //toggle the icon
    setIsBookmarked(!isBookmarked);
  };

  const addSubscription = () => {
    //do some subscribing blah blah
  };

  return (
    <div className="profileContent">
      {userIsLoading ? (
        <CircularProgress />
      ) : userError ? (
        <p>Shit! We gone fucked up!</p>
      ) : (
        <div>
          <div className="coverPicture">
            {user.coverPicture !== "" && (
              <img
                src={`/images/${user.coverPicture}`}
                alt=""
                className="coverPic"
              />
            )}

            {user.profilePicture !== "" && (
              <img
                src={`/images/${user.profilePicture}`}
                alt=""
                className="profilePic"
              />
            )}
          </div>
          <div className="buttonContainer">
            {isBookmarked ? (
              <StarIcon className="buttonIcons" onClick={toggleBookmark} />
            ) : (
              <StarBorderIcon
                className="buttonIcons"
                onClick={toggleBookmark}
              />
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
          {PostsAreLoading ? (
            <CircularProgress />
          ) : PostErrors ? (
            <p>Damn! Could not load the posts!</p>
          ) : (
            <ProfilePostList posts={Posts} />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
