import { Container, Row, Col } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container>
      <h4 className="my-3">Admin Dashboard</h4>
      <h5>Research Deatails</h5>
      <Row className="mb-3">
        <Col>Total Research Notices:</Col>
        <Col>23</Col>
        <Col>Approved Research Notices:</Col>
        <Col>23</Col>
      </Row>
      <h5>Workshop Deatails</h5>
      <Row className="mb-3">
        <Col>Total Workshop Notices:</Col>
        <Col>23</Col>
        <Col>Approved Research Topics:</Col>
        <Col>23</Col>
      </Row>
      <h5>Keynotes Deatails</h5>
      <Row>
        <Col>Total Keynotes:</Col>
        <Col>23</Col>
        <Col>Approved Keynotes:</Col>
        <Col>23</Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
