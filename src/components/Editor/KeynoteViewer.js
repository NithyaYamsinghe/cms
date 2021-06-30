import { useState, useEffect } from "react";
import { Table, Container, Row } from "react-bootstrap";
import { getKeynotes } from "../../services/EditorServices";

const KeynoteViewer = () => {
  const [keynotes, setKeynotes] = useState([]);

  const loadKeynotes = async () => {
    const keynotes = await getKeynotes();
    setKeynotes(keynotes.data);
  };

  const showKeynoteRow = () => {
    if (!keynotes.length) return null;
    return keynotes.map((row) => {
      return (
        <tr>
          <td>{row.name}</td>
          <td>{row.workPlace}</td>
          <td>{row.description}</td>
          <td>{row.createdDate}</td>
          <td>{row.status}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    loadKeynotes();
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <h4>All Keynote Speakers</h4>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Name</td>
            <td>Workplace</td>
            <td>Description</td>
            <td>Created Time</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>{showKeynoteRow()}</tbody>
      </Table>
    </Container>
  );
};

export default KeynoteViewer;
