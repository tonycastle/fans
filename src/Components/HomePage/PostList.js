import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ConfirmationDialogue from "../Utilities/ConfirmationDialogue";
import { useState } from "react";

const PostList = ({ posts, deletePost }) => {
  const [dialogueVisibility, setDialogueVisibility] = useState(false);
  const [selectedPost, setSelectedPost] = useState(""); //post selected for deletion

  if (posts.length < 1) {
    return (
      <p>
        You have no posts. Maybe this is the perfect time to add your first one!
      </p>
    );
  }

  return (
    <div>
      <ConfirmationDialogue
        isVisible={dialogueVisibility}
        cancelAction={() => {
          setDialogueVisibility(false);
        }}
        confirmAction={() => {
          deletePost(selectedPost);
          setDialogueVisibility(false);
        }}
        title="Confirm post deletion"
        text="Press delete to permanently delete this post"
        confirmText="delete"
        cancelText="cancel"
      />
      {posts.map((post) => {
        return (
          <div className="PostListPost" key={post._id}>
            <Link to={`/ownpost/${post._id}`}>
              <h2>{post.post_text}</h2>
            </Link>
            <Button
              onClick={() => {
                setSelectedPost(post._id);
                setDialogueVisibility(true);
              }}
            >
              delete post
            </Button>

            {post.files.length > 0 && ( // TODO should check that files.remote_location exists
              <img
                src={`/images/${post.files[0].remote_location}`}
                alt=""
                className="postListThumbImage"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
