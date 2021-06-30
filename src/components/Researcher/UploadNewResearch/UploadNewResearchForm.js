import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form3,
  FormButton,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./../../../common/FormElements/FormElements";
import Select from "react-select";
import UploadService from "./../../../services/FileUploadService";
import { useAuth } from "./../../../context/AuthContext";

const UploadNewResearchForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topics, setTopics] = useState([
    { value: 1, label: "IOT" },
    { value: 2, label: "Machine Learning" },
  ]);
  const [authors, setAutors] = useState([
    { value: 1, label: "N.R. Yamasinghe" },
    { value: 2, label: "D.M.Y.S. Dissanayake" },
  ]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const { researchFileUpload, currentUserID } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);
    const user = currentUserID;
    researchFileUpload(
      currentFile,
      description,
      title,
      selectedTopics,
      selectedAuthors,
      user,

      (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      }
    )
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      })
      .then(() => {});
  };

  const selectFile = (e) => {
    setSelectedFiles(e.target.files);
  };

  const onTopicSelect = (e) => {
    setSelectedTopics(e ? e.map((item) => item.label) : []);
    console.log(selectedTopics);
  };

  const onAuthorSelect = (e) => {
    setSelectedAuthors(e ? e.map((item) => item.label) : []);
  };

  return (
    <React.Fragment>
      <FormWrap style={{ marginLeft: "200px" }}>
        <FormContent className="mt-3">
          <Form3 onSubmit={handleSubmit}>
            <FormLabel htmlFor="for">Research Title</FormLabel>
            <FormInput
              htmlFor="title"
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormLabel htmlFor="for">Description</FormLabel>
            <FormTextArea
              htmlFor="description"
              required
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormLabel htmlFor="for">Select Topic Interests</FormLabel>
            <Select
              options={topics}
              onChange={(e) => onTopicSelect(e)}
              className="basic-multi-select"
              isMulti
            />
            <br />
            <FormLabel htmlFor="for">Select Authors</FormLabel>
            <Select
              options={authors}
              onChange={(e) => onAuthorSelect(e)}
              className="basic-multi-select"
              isMulti
            />
            <br />
            {currentFile && (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info progress-bar-striped"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progress + "%" }}
                >
                  {progress}%
                </div>
              </div>
            )}
            <br />
            <FormLabel htmlFor="for">
              Upload Research Paper (PDF Document)
            </FormLabel>
            <FormInput
              htmlFor="pdf"
              required
              type="file"
              onChange={selectFile}
            />

            <FormButton type="submit">Upload Research</FormButton>
          </Form3>
        </FormContent>
      </FormWrap>
    </React.Fragment>
  );
};

export default UploadNewResearchForm;
