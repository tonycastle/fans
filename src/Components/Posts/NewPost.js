import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { PostFileUpload } from "./PostFileUpload";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { TextareaAutosize, TextField, MenuItem } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import http from "../../http-common";
import "./newPost.css";

const NewPost = () => {
  //holds the files dragged into the drop zone.
  const [files, setFiles] = useState([]);
  const [formValues, setFormValues] = useState({
    post_text: "",
    post_price: 0,
    post_access: "free",
  });

  //store the remote file location when the upload is completed
  const onUploadComplete = (id, path) => {
    files.forEach((file) => {
      if (id === file.id) {
        Object.assign(file, {
          remote_location: path,
        });
      }
    });
  };

  //this removes the uploaded file from the files array but we
  // also need to remove it from the server
  const deleteUploadedFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  //create the file upload dropzone
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    // accept: "images/png", //TODO: fix accepted file types
    onDrop: (acceptedFiles, rejectedFiles) => {
      const mappedAcc = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: uuidv4(),
        })
      );
      setFiles([...files, ...mappedAcc]); //we can just add new ones as existing uloaders will not rerun due to useEffect
    },
    noClick: true,
  });

  //create the preview thumbs with the progress bar
  const thumbs = files.map((file) => (
    <PostFileUpload
      file={file}
      key={file.name}
      onComplete={onUploadComplete}
      onDelete={deleteUploadedFile}
    />
  ));

  //FORM functions
  //update state as form is updated
  const updateFormValues = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  //submit the form
  const formSubmit = async (e) => {
    e.preventDefault();
    let data = { ...formValues, files: files };
    try {
      let res = await http.post("/api/posts/create", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //TODO: this does nt delete already uploaded images - might needto look at that
  const clearForm = () => {
    setFiles([]);
    setFormValues({
      post_text: "",
      post_price: 0,
      post_access: "free",
    });
  };

  return (
    <div className="newPostContent">
      <h2>New Post</h2>

      <div {...getRootProps({ className: "dropzone" })}>
        <div className="previewPane">{thumbs}</div>
        {isDragActive && (
          <div className="dragActive">
            <p>Drop files here to upload them</p>
          </div>
        )}

        <TextareaAutosize
          name="post_text"
          id="post_text"
          type="text"
          placeholder={`${
            files.length > 0 ? "Add description here..." : "Enter post text..."
          }`}
          onChange={updateFormValues("post_text")}
          value={formValues.post_text}
        />
        <CropOriginalIcon onClick={open} className="imageSelector" />
        <input {...getInputProps()} name="postFiles" />
      </div>

      <button
        disabled={
          files.length < 1 &&
          formValues.post_text !== "" &&
          formValues.post_price !== 0
        }
        onClick={clearForm}
      >
        clear
      </button>
      <button
        disabled={
          files.length < 1 &&
          formValues.post_text !== "" &&
          formValues.post_price !== 0
        }
        onClick={formSubmit}
      >
        post
      </button>
      <h3>Pay per View</h3>
      {formValues.post_access === "ppv" && (
        <span>
          <p>Enter a price to make the post only accessible on payment.</p>
          <TextField
            type="text"
            label="Price"
            name="price"
            onChange={updateFormValues("post_price")}
            value={formValues.post_price}
            variant="outlined"
          />
        </span>
      )}
      <TextField
        select
        label="Access"
        name="access"
        onChange={updateFormValues("post_access")}
        value={formValues.post_access}
        variant="outlined"
      >
        <MenuItem key="free" value="free">
          Free
        </MenuItem>
        <MenuItem key="subscribers" value="subscribers">
          Subscribers
        </MenuItem>
        <MenuItem key="ppv" value="ppv">
          ppv
        </MenuItem>
      </TextField>
    </div>
  );
};

export default NewPost;
