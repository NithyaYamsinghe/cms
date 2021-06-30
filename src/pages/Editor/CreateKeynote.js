import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form3,
  FormButton,
  FormInput,
  FormLabel,
  FormTextArea,
} from "../../common/FormElements/FormElements";
import Select from "react-select";
import { useAuth } from "../../context/authContext";

const CreateNewKeynote = () => {
  const [name, setName] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [description, setDescription] = useState("");

  const [progress, setProgress] = useState(0);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [message, setMessage] = useState("");
  const { createNewKeynote, currentUserID } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentFile = selectedFiles[0];
    setProgress(0);
    setCurrentFile(currentFile);
    const user = currentUserID;
    createNewKeynote(
      currentFile,
      name,
      workplace,
      description,
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

  return (
    <React.Fragment>
      <FormWrap style={{ marginLeft: "200px" }}>
        <FormContent className="mt-3">
          <Form3 onSubmit={handleSubmit}>
            <FormLabel htmlFor="for">Name of Keynote Speaker:</FormLabel>
            <FormInput
              htmlFor="name"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel htmlFor="for">Workplace:</FormLabel>
            <FormTextArea
              htmlFor="workplace"
              required
              type="text"
              value={workplace}
              onChange={(e) => setWorkPlace(e.target.value)}
            />
            <FormLabel htmlFor="for">Description:</FormLabel>
            <FormTextArea
              htmlFor="description"
              required
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <FormLabel htmlFor="for">Upload Profile Photo</FormLabel>
            <FormInput
              htmlFor="pdf"
              required
              type="file"
              onChange={selectFile}
            />

            <FormButton type="submit">Create Keynote</FormButton>
          </Form3>
        </FormContent>
      </FormWrap>
    </React.Fragment>
  );
};

export default CreateNewKeynote;
