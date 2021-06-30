import { useState, useEffect } from "react";
import { Table, Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getKeynotes } from "../../services/EditorServices";

const KeynoteViewer = () => {
  const [keynotes, setKeynotes] = useState([]);

  const loadKeynotes = async () => {
    const keynotes = await getKeynotes();
    setKeynotes(keynotes);
  };

  const showKeynoteRow = () => {
    if (!keynotes.length) return null;
    return keynotes.map((row) => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>{row.persons}</td>
          <td>{row.startDate}</td>
          <td>{row.endTime}</td>
          <td>
            <Link
              to={`/admin/workshop-notices/${row._id}`}
              className="btn btn-primary"
            >
              View
            </Link>
          </td>
          <td>
            {/* <Button
              onClick={() => approveWorkshopNotice(row._id)}
              disabled={row.status !== "PENDING_REVIEW"}
            >
              {row.status === "PENDING_REVIEW" ? "Approve" : "Approved"}
            </Button> */}
          </td>
          <td>
            {/* <Button
              onClick={() => deleteWorkshopNotice(row._id)}
              variant="danger"
            >
              Delete
            </Button> */}
          </td>
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
            <td>Persons</td>
            <td>Start Date</td>
            <td>End Time</td>
            <td>View</td>
            <td>Approve</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>{showKeynoteRow()}</tbody>
      </Table>
    </Container>
  );
};

export default KeynoteViewer;
