import { useFetchData } from "../../hooks/useFetchData";
import { useMemo } from "react";
import { useParams } from "react-router";
import { CircularProgress } from "@material-ui/core";
//import axios from "axios";

const ProfilePost = () => {
  const { id } = useParams();
  const payload = useMemo(() => ({ id: id }), [id]);
  const [Post, setPost, PostError, isLoading] = useFetchData(
    "/api/posts/post",
    payload
  );

  return (
    <div>
      <h2>Post</h2>
      {isLoading ? (
        <CircularProgress />
      ) : PostError ? (
        <p>Oops! Something went wrong!</p>
      ) : (
        <div>
          <p>{Post.post_text}</p>
          <p>Views: {Post.views || 0}</p>
          <p>Access Type: {Post.post_access || 0}</p>
          <p>Likes: {Post.likes.count || 0}</p>
          <p>Subscribers: {Post.subscribers.length}</p>

          {Post.files.length > 0 ? (
            <div>
              {Post.files.map((file) => {
                return (
                  <div key={file.id}>
                    <img src={`/images/${file.remote_location}`} alt="" />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>There are no files attached to this post</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePost;
