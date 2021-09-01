import { useState, useRef } from "react";
import * as UploadService from "../../../Services/upload-files-service";
import "./newPost.css";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";

const NewPost = () => {
  //createfile upload states
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(undefined);
  const [fileInfos, setFileInfos] = useState([]); // don't need this probably

  //ref to file input - to access the hidden file input
  const inputFileRef = useRef(null);
  const addImageHandler = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  //access the selected files to build previewimage
  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  const submitHandler = () => {};
  return (
    <div>
      <h2>New Post</h2>
      <form onsubmit={submitHandler} className="newPostForm">
        <img src={previewImage} className="uploadPreviewImage" />
        <input type="file" onChange={selectFile} ref={inputFileRef} multiple />
        <span className="imageUploadButton">
          <CropOriginalIcon onClick={addImageHandler} />
        </span>
        <input
          type="textarea"
          className="post_text"
          placeholder="Add description"
        ></input>
        <button>post</button>
      </form>
    </div>
  );
};

export default NewPost;
