import http from "../http-common";

export const upload = async (file, target, onProgress) => {
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
    console.log(response.data.path);
  } catch (error) {
    console.log(error);
  }
};

export const getFiles = () => {
  return http.get("/files");
};
