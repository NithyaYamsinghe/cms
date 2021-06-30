import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import TimePicker from "react-bootstrap-time-picker";
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
import { useAuth } from "./../../../context/authContext";

const UploadNewWorkShopForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [resourcePersons, setResourcePersons] = useState([
    { value: 1, label: "N.R. Yamasinghe" },
    { value: 2, label: "D.M.Y.S. Dissanayake" },
  ]);

  const [selectedResourcePersons, setSelectedResourcePersons] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const { workshopFileUpload, currentUserID } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentFile = selectedFiles;

    setProgress(0);
    setCurrentFile(currentFile);
    const user = currentUserID;
    workshopFileUpload(
      currentFile,
      description,
      title,
      selectedResourcePersons,
      date,
      startTime,
      endTime,
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
      });

    setSelectedFiles(undefined);
  };

  const selectFile = (files) => {
    const file = files[0];
    setSelectedFiles(file);
  };

  // const handleStartTimeChange = (tiime) => {
  //   setStartTime(tiime);
  // };

  // const handleEndTimeChange = (time) => {
  //   setEndTime(time);
  // };

  const onResourcePersonSelect = (e) => {
    setSelectedResourcePersons(e ? e.map((item) => item.label) : []);
  };

  console.log(startTime);
  console.log(endTime);

  return (
    <React.Fragment>
      <FormWrap style={{ marginLeft: "200px" }}>
        <FormContent className="mt-3">
          <Form3 onSubmit={handleSubmit}>
            <FormLabel htmlFor="for">Workshop Title</FormLabel>
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
            <FormLabel htmlFor="for">Select Resource Persons</FormLabel>
            <Select
              options={resourcePersons}
              onChange={(e) => onResourcePersonSelect(e)}
              className="basic-multi-select"
              isMulti
            />
            <br />
            <FormLabel htmlFor="for">Date</FormLabel>
            <FormInput
              htmlFor="date"
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <FormLabel htmlFor="for">Start Time</FormLabel>
            <FormInput
              htmlFor="startTime"
              required
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <br />
            <FormLabel htmlFor="for">End Time</FormLabel>
            <FormInput
              htmlFor="endTime"
              required
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            <br />
            <FormLabel htmlFor="for">Upload WorkShop Proposal</FormLabel>
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
            <DropzoneArea
              onChange={selectFile}
              filesLimit={1}
              maxFileSize={20000000}
              showAlerts={false}
              showFileNames={true}
              dropzoneClass={"dropzone"}
              dropzoneText={"Drag and drop an pdf file here or click (.pdf)"}
            />
            <br />
            <FormButton type="submit">Submit</FormButton>
          </Form3>
        </FormContent>
      </FormWrap>
    </React.Fragment>
  );
};

export default UploadNewWorkShopForm;
