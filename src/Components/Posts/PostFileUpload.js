import { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import * as UploadService from "../../Services/upload-files-service";

export const PostFileUpload = ({ file, onComplete, onDelete }) => {
  const [progress, setProgress] = useState(0);
  const [uploadCompleted, setUploadCompleted] = useState(false);

  let uploadComplete = (path) => {
    setUploadCompleted(true);
    onComplete(file.id, path);
  };

  useEffect(() => {
    UploadService.upload(
      file,
      "/api/posts/uploadPostFile",
      setProgress,
      uploadComplete
    );
  }, [file]);

  return (
    <div className="thumbContainer">
      <img src={file.preview} alt={file.name} />
      {!uploadCompleted && (
        <LinearProgress
          variant="determinate"
          value={progress}
          className="uploadProgress"
        />
      )}
      {uploadCompleted && (
        <CancelIcon
          className="deletePostFile"
          onClick={() => onDelete(file.id)}
        />
      )}
    </div>
  );
};
