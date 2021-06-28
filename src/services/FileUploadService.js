import http from "./HtttpService";
const upload = (
  file,
  description,
  title,
  selectedTopics,
  selectedAuthors,
  status,
  onUploadProgress
) => {
  let formData = new FormData();

  formData.append("file", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("topics", selectedTopics);
  formData.append("authors", selectedAuthors);
  formData.append("status", status);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/files");
};

export default {
  upload,
  getFiles,
};
