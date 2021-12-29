import { useFetchData } from "../../hooks/useFetchData";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { CircularProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ConfirmationDialogue from "../Utilities/ConfirmationDialogue";
//import axios from "axios";

const Post = () => {
  const { id } = useParams();
  const payload = useMemo(() => ({ id: id }), [id]);
  const [Post, setPost, PostError, isLoading] = useFetchData(
    "/api/posts/ownpost",
    payload
  );

  const [dialogueVisibility, setDialogueVisibility] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  const deleteImage = (id) => {
    //filter the image out of the files array in the post
    const filteredImages = Post.files.filter((file) => file.id !== id);
    setPost((prev) => ({
      ...prev,
      files: filteredImages,
    }));
  };

  //TODO: add a save changes button to update the backend in 1 step to keep traffic down.
  /*   const editPost = async (id) => {
    try {
      const res = await axios.post("/api/posts/editpost", { id: id });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }; */

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
          <div>
            <ConfirmationDialogue
              isVisible={dialogueVisibility}
              cancelAction={() => {
                setDialogueVisibility(false);
              }}
              confirmAction={() => {
                deleteImage(selectedFile);
                setDialogueVisibility(false);
              }}
              title="Confirm image deletion"
              text="Press delete to permanently delete this image"
              confirmText="delete"
              cancelText="cancel"
            />
            {Post.files.length > 0 ? (
              <div>
                {Post.files.map((file) => {
                  return (
                    <div key={file.id}>
                      <Button
                        onClick={() => {
                          setSelectedFile(file.id);
                          setDialogueVisibility(true);
                        }}
                      >
                        delete image
                      </Button>
                      <img src={`/images/${file.remote_location}`} alt="" />
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>There are no files attached to this post</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
