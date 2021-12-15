import "./homepage.css";
import axios from "axios";
import { useMemo, useContext } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { AuthContext } from "../../contexts/auth-context";
import PostList from "./PostList";
import CircularProgress from "@material-ui/core/CircularProgress";
//for the time being this page is just the logged in users own posts.

const HomePage = () => {
  //get our user id - we could also get this from the AuthContext - for now we will do it this way
  const id = useContext(AuthContext).User._id;
  //get the posts
  const owner_id = useMemo(() => ({ id: id }), [id]);

  const [Posts, setPosts, PostErrors, PostsAreLoading] = useFetchData(
    "/api/posts/allpostsfromuser",
    owner_id
  );

  const deletePost = async (id) => {
    try {
      const res = await axios.post("/api/posts/delete", { id: id });
      const filteredPosts = Posts.filter((post) => post._id !== id);
      setPosts(filteredPosts);
      console.log(res);
    } catch (err) {
      //display some kind of error message so user knows something went wrong.
      console.log(err);
    }
  };

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h2>Your Posts</h2>
        {PostsAreLoading ? (
          <CircularProgress />
        ) : PostErrors ? (
          <p>{`Oops! - Something went wrong! :( ${PostErrors}`}</p>
        ) : (
          <PostList posts={Posts} deletePost={deletePost} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
