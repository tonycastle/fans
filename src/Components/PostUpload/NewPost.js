import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { PostFileUpload } from "./PostFileUpload";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { Grid } from "@material-ui/core";
import "./newPost.css";

const NewPost = () => {
  const [files, setFiles] = useState([]);

  //create the file upload dropzone
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    // accept: "images/png", //TODO: fix accepted file types
    onDrop: (acceptedFiles, rejectedFiles) => {
      const mappedAcc = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setFiles([...mappedAcc]);
    },
    noClick: true,
  });

  //create the preview thumbs with the progress bar
  const thumbs = files.map((file) => (
    <PostFileUpload file={file} key={file.name} />
  ));

  return (
    <div className="newPostContent">
      <h2>New Post</h2>
      <Grid>
        <div {...getRootProps({ className: "dropzone" })}>
          {isDragActive && (
            <div className="dragActive">
              <p>Drop files here to upload them</p>
            </div>
          )}
          <input {...getInputProps()} name="postFiles" />
          {thumbs}
        </div>
      </Grid>
      <CropOriginalIcon onClick={open} />
      <textarea
        name="post_text"
        id="post_text"
        cols="30"
        rows="10"
        placeholder="Add description here..."
      ></textarea>
      <button disabled="disabled">clear</button>
      <button disabled="disabled">post</button>
    </div>
  );
};

export default NewPost;
