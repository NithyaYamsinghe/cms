import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../context/authContext";

const AttendeeDashboard = () => {
  const { currentUserType } = useAuth();
  return (
    <React.Fragment>
      <div>
        <Card className="text-center dashboard-text">
          <Card.Header>
            <br />
          </Card.Header>
          <Card.Body>
            <h1>1st International Conference on Application Frameworks</h1>
            <h2>Held on 9th 10th 11th December 2021</h2>
            <br />
            <h3>Sri Lanka Institute of Information Technology, Sri lanka</h3>
            <br />
            <br />
            {currentUserType === "ATTENDEE" && (
              <Link to="user-payment" style={{ textDecoration: "none" }}>
                <Button variant="primary">Reserve A Seat Now</Button>
              </Link>
            )}
            {currentUserType === "RESEARCHER" && (
              <Link to="upload-new-research" style={{ textDecoration: "none" }}>
                <Button variant="primary">Submit You Research Proposals</Button>
              </Link>
            )}
            {currentUserType === "WORKSHOPCONDUCTOR" && (
              <Link to="upload-new-workshop" style={{ textDecoration: "none" }}>
                <Button variant="primary">
                  Submit Your Workshop Proposals
                </Button>
              </Link>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">
            <br />
          </Card.Footer>
        </Card>
      </div>
      <br />
      <div class="row">
        <div class="col-sm-3">
          <Card
            border="primary dashboard-text"
            style={{ width: "18rem", margginLeft: "10px" }}
          >
            <Card.Header>Machine Learning Workshop</Card.Header>
            <Card.Body>
              <Card.Title>Introduction to ML</Card.Title>
              <Card.Text>Venue: 13th December Zoom</Card.Text>
              <Card.Text>Time: 8.00 AM to 12.00 PM</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-3">
          <Card
            border="secondary dashboard-text"
            style={{ width: "18rem", margginLeft: "10px" }}
          >
            <Card.Header>CDAP Workshop</Card.Header>
            <Card.Body>
              <Card.Title>Intro to Research Project</Card.Title>
              <Card.Text>Venue: 15th December Zoom</Card.Text>
              <Card.Text>Time: 8.00 AM to 12.00 PM</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-3">
          <Card
            border="info dashboard-text"
            style={{ width: "18rem", margginLeft: "10px" }}
          >
            <Card.Header>Presentation Workshop</Card.Header>
            <Card.Body>
              <Card.Title>Essential Skills</Card.Title>
              <Card.Text>Venue: 17th December Zoom</Card.Text>
              <Card.Text>Time: 8.00 AM to 12.00 PM</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm-3">
          <Card
            border="dark dashboard-text"
            style={{ width: "18rem", margginLeft: "10px" }}
          >
            <Card.Header>Deep Learning Workshop</Card.Header>
            <Card.Body>
              <Card.Title>Introduction to DL</Card.Title>
              <Card.Text>Venue: 18th December Zoom</Card.Text>
              <Card.Text>Time: 8.00 AM to 12.00 PM</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AttendeeDashboard;
