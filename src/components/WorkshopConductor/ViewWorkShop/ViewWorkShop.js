import React, { useEffect, useState } from "react";
import { useAuth } from "./../../../context/authContext";
import moment from "moment";
import { Card } from "react-bootstrap";

const ViewWorkShop = ({ match }) => {
  const { getWorkshopById } = useAuth();
  const [workshopId, setWorkshopId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [resourcePersons, setResourcePersons] = useState();

  useEffect(async () => {
    const data = await getWorkshopById(match.params.id);
    setTitle(data.data[0].title);
    setDescription(data.data[0].description);
    setStartTime(data.data[0].startTime);
    setEndTime(data.data[0].endTime);
    setResourcePersons(data.data[0].persons);
    setDate(data.data[0].startDate);
    setWorkshopId(data.data[0]._id);
  }, []);

  return (
    <div>
      <Card border="primary" className="dashboard-text">
        <Card.Header>Workshop Id - {workshopId}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Resource Persons: {resourcePersons}</Card.Text>
          <Card.Text> Date: {moment(date).format("YYYY-MM-DD")}</Card.Text>
          <Card.Text>
            Time:{startTime} to {endTime}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewWorkShop;
