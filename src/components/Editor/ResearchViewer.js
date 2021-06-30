import { useState, useEffect } from "react";
import { Table, Container, Row } from "react-bootstrap";
import {
  getAllResearches,
  createResearchNotice,
} from "../../services/EditorServices";

const ManageResearches = () => {
  const [researches, setResearches] = useState([]);

  const loadResearches = async () => {
    const resultResearches = await getAllResearches();
    setResearches(resultResearches.data);
  };

  const createResearchNote = (researchId) => {
    console.log(researchId);
    createResearchNotice(researchId);
  };

  const showResearchRow = () => {
    if (!researches.length) return null;
    return researches.map((row) => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>{row.topicInterests}</td>
          <td>{row.authors}</td>
          <td>{row.createdDate}</td>
          <td>{row.status}</td>
          <td>
            {row.status === "NOTICE_CREATED" && "Notice Already Created"}{" "}
            {row.status === "PENDING_REVIEW" && (
              <button
                type="button"
                class="btn btn-primary"
                disabled
                onClick={(e) => createResearchNote(row._id)}
              >
                Create Notice
              </button>
            )}
            {row.status === "REVIEWER_APPROVED" && (
              <button
                type="button"
                class="btn btn-primary"
                disabled
                onClick={(e) => createResearchNote(row._id)}
              >
                Create Notice
              </button>
            )}
            {row.status === "PAID" && (
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => createResearchNote(row._id)}
              >
                Create Notice
              </button>
            )}
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    loadResearches();
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
            <td>Create Notice</td>
          </tr>
        </thead>
        <tbody>{showResearchRow()}</tbody>
      </Table>
    </Container>
  );
};

export default ManageResearches;
