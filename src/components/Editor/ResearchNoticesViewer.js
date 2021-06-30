import { useState, useEffect } from "react";
import { Table, Container, Row } from "react-bootstrap";
import { getAllReasearchNotices } from "../../services/EditorServices";

const ResearchNotices = () => {
  const [notices, setNotices] = useState([]);

  const loadNotices = async () => {
    const resultNotices = await getAllReasearchNotices();
    setNotices(resultNotices.data);
  };

  const showNoticeRow = () => {
    if (!notices.length) return null;
    return notices.map((row) => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>{row.topicInterests}</td>
          <td>{row.authors}</td>
          <td>{row.createdDate}</td>
          <td>{row.status}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    loadNotices();
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <h4>Manage Research Notices</h4>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Persons</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>{showNoticeRow()}</tbody>
      </Table>
    </Container>
  );
};

export default ResearchNotices;
