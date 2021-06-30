import http from "./HtttpService";
const researchUpload = (
  file,
  description,
  title,
  selectedTopics,
  selectedAuthors,
  user,
  onUploadProgress
) => {
  let formData = new FormData();

  formData.append("researchFile", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("topicInterests", selectedTopics);
  formData.append("authors", selectedAuthors);
  formData.append("user", user);

  return http.post("/research", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const researchUpdate = (
  file,
  description,
  title,
  selectedTopics,
  selectedAuthors,
  id,
  onUploadProgress
) => {
  let formData = new FormData();

  formData.append("researchFile", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("topicInterests", selectedTopics);
  formData.append("authors", selectedAuthors);
  formData.append("id", id);

  return http.patch("/research/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const workshopUpload = (
  file,
  description,
  title,
  persons,
  date,
  startTime,
  endTime,
  user,
  onUploadProgress
) => {
  let formData = new FormData();

  formData.append("flyerFile", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("persons", persons);
  formData.append("startDate", date);
  formData.append("startTime", startTime);
  formData.append("endTime", endTime);
  formData.append("user", user);

  return http.post("/workshops", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const workshopUpdate = (
  file,
  description,
  title,
  persons,
  date,
  startTime,
  endTime,
  id,
  onUploadProgress
) => {
  let formData = new FormData();

  formData.append("flyerFile", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("persons", persons);
  formData.append("startDate", date);
  formData.append("startTime", startTime);
  formData.append("endTime", endTime);
  formData.append("id", id);

  return http.patch("/workshops/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export default {
  researchUpload,
  researchUpdate,
  workshopUpload,
  workshopUpdate,
};
