import axios from "axios";

export const upload = async (file, target, onProgress, onComplete) => {
  let formData = new FormData();
  formData.append("file", file);

  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  if (onProgress !== null) {
    options.onUploadProgress = function (event) {
      const percentage = (event.loaded / event.total) * 100;
      onProgress(Math.round(percentage));
    };
  }

  try {
    const response = await axios.post(target, formData, options);
    await onComplete(response.data.path);
  } catch (error) {
    console.log(error);
  }
};

export const getFiles = () => {
  return axios.get("/files");
};
