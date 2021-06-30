import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getWorkshopNoticeApi } from "../../services/workshopService";
import Moment from "react-moment";

const ViewWorkshopNotice = () => {
  const { workshopNoticeId } = useParams();

  const [workshopNotice, setWorkshopNotice] = useState(null);

  useEffect(() => {
    getResearchNotice();
  });

  const getResearchNotice = async () => {
    const response = await getWorkshopNoticeApi(workshopNoticeId);
    setWorkshopNotice(response.data);
  };

  return (
    <Container>
      {workshopNotice && (
        <>
          <h4 className="my-3">{workshopNotice.title}</h4>

          <Row>
            <Col>Title:</Col>
            <Col md={10}>{workshopNotice.title}</Col>
          </Row>
          <Row>
            <Col>Description:</Col>
            <Col md={10}>{workshopNotice.description}</Col>
          </Row>
          <Row>
            <Col>Start Date:</Col>
            <Col md={10}>
              <Moment format="YYYY/MM/DD">{workshopNotice.startDate}</Moment>
            </Col>
          </Row>
          <Row>
            <Col>End Time:</Col>
            <Col md={10}>
              <Moment format="YYYY/MM/DD hh:mm A">
                {workshopNotice.endTime}
              </Moment>
            </Col>
          </Row>
          <Row>
            <Col>Authors:</Col>
            <Col md={10}>{workshopNotice.persons}</Col>
          </Row>
          <Row>
            <Col>Status:</Col>
            <Col md={10}>{workshopNotice.status}</Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ViewWorkshopNotice;
