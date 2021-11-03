import axios from "axios";
import { useEffect, useState } from "react";
import "./profile.css";

const PostDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const payload = { id: "613a4f9bd195b74b2586d05d" };
        const postData = await axios.post("api/posts/allposts", payload); //user is haardcoded for now
        postData.data.success
          ? setPosts(postData.data.allPosts)
          : setErrors(postData.data.message); //this will overwrite existing errors need to add instead
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="displayPostsContainer">
      <p>test post about some bull shit - blagh</p>
    </div>
  );
};

export default PostDisplay;
