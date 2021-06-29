import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getResearchNoticeApi } from "../../services/researchService";

const ViewResearchNotice = () => {
  const { researchNoticeId } = useParams();

  const [researchNotice, setResearchNotice] = useState(null);

  useEffect(() => {
    getResearchNotice();
  });

  const getResearchNotice = async () => {
    const response = await getResearchNoticeApi(researchNoticeId);
    setResearchNotice(response.data);
  };

  return (
    <Container>
      {researchNotice && (
        <>
          <h4 className="my-3">{researchNotice.title}</h4>

          <Row>
            <Col>Title:</Col>
            <Col md={10}>{researchNotice.title}</Col>
          </Row>
          <Row>
            <Col>Description:</Col>
            <Col md={10}>{researchNotice.description}</Col>
          </Row>
          <Row>
            <Col>Topic Interest:</Col>
            <Col md={10}>{researchNotice.topicInterests}</Col>
          </Row>
          <Row>
            <Col>Authors:</Col>
            <Col md={10}>{researchNotice.authors}</Col>
          </Row>
          <Row>
            <Col>Status:</Col>
            <Col md={10}>{researchNotice.status}</Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ViewResearchNotice;
