import http from "../http-common";

export const upload = async (file, target, onProgress, onComplete) => {
  let formData = new FormData();
  formData.append("file", file);

  try {
    const response = await http.post(target, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: function (event) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      },
    });
    await onComplete(response.data.path);
  } catch (error) {
    console.log(error);
  }
};

export const getFiles = () => {
  return http.get("/files");
};
