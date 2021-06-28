import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import TimePicker from "react-bootstrap-time-picker";
import {
  FormWrap,
  FormContent,
  Form3,
  FormH1,
  FormButton,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./../../../common/FormElements/FormElements";
import Select from "react-select";
import UploadService from "./../../../services/FileUploadService";

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
  const [status, setStatus] = useState("");

  const [selectedResourcePersons, setSelectedResourcePersons] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentFile = selectedFiles;

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload(
      currentFile,
      description,
      title,
      selectedResourcePersons,
      date,
      startTime,
      endTime,
      status,
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

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const onResourcePersonSelect = (e) => {
    setSelectedResourcePersons(e ? e.map((item) => item.value) : []);
  };

  console.log(startTime);
  console.log(endTime);
  return (
    <React.Fragment>
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
      <FormWrap>
        <FormContent className="mt-5">
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
            <TimePicker
              start="10:00"
              end="21:00"
              step={30}
              onChange={handleStartTimeChange}
              value={startTime}
            />
            <br />
            <FormLabel htmlFor="for">End Time</FormLabel>
            <TimePicker
              start="10:00"
              end="21:00"
              value={endTime}
              step={30}
              onChange={handleEndTimeChange}
            />
            <br />
            <FormLabel htmlFor="for">Upload WorkShop Proposal</FormLabel>
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
