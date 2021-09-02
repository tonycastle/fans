import { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";
import * as UploadService from "../../Services/upload-files-service";

export const PostFileUpload = ({ file }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    UploadService.upload(file, "/api/posts/uploadPostFile", setProgress);
  }, []);

  return (
    <div className="thumbContainer">
      <img src={file.preview} alt={file.name} />
      <LinearProgress
        variant="determinate"
        value={progress}
        className="uploadProgress"
      />
    </div>
  );
};
