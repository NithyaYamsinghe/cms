import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  locationText: {
    paddingLeft: "15px",
  },
  buttonProperty: {
    position: "absolute",
    top: "50%",
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  progess: {
    position: "absolute",
  },
  uploadButton: {
    marginLeft: "8px",
    margin: theme.spacing(1),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  submitButton: {
    marginTop: "10px",
  },
});

const UpdateResearchForm = (props) => {
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
  const [status, setStatus] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const { classes, ...rest } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentFile = selectedFiles[0];
    console.log(currentFile);

    setProgress(0);
    setCurrentFile(currentFile);

    // UploadService.upload(
    //   currentFile,
    //   status,
    //   selectedAuthors,
    //   selectedTopics,
    //   title,
    //   description,
    //   (event) => {
    //     setProgress(Math.round((100 * event.loaded) / event.total));
    //   }
    // )
    //   .then((response) => {
    //     setMessage(response.data.message);
    //   })
    //   .catch(() => {
    //     setProgress(0);
    //     setMessage("Could not upload the file!");
    //     setCurrentFile(undefined);
    //   });

    setSelectedFiles(undefined);
  };

  const selectFile = (e) => {
    setSelectedFiles(e.target.files);
  };

  const onTopicSelect = (e) => {
    setSelectedTopics(e ? e.map((item) => item.value) : []);
  };

  const onAuthorSelect = (e) => {
    setSelectedAuthors(e ? e.map((item) => item.value) : []);
  };

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card {...rest} className={clsx(classes.root, classes)}>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="First name"
                    margin="dense"
                    name="firstName"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Last name"
                    margin="dense"
                    name="lastName"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="User Name"
                    margin="dense"
                    name="username"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    margin="dense"
                    name="phoneNumber"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    margin="dense"
                    name="email"
                    disabled={true}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="NIC"
                    margin="dense"
                    name="NIC"
                    variant="outlined"
                    disabled={true}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions />
          </form>
        </Card>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className={classes.submitButton}
        >
          Update Details
        </Button>
      </main>
    </div>
  );
};

export default withStyles(styles)(UpdateResearchForm);
