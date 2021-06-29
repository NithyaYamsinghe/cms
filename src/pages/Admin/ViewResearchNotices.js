import { useState, useEffect } from "react";
import { Table, Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getResearchNoticesApi,
  approveResearchNoticeApi,
  deleteResearchNoticeApi,
} from "../../services/researchService";

const ViewResearchNotices = () => {
  const [research, setResearch] = useState([]);

  const getResearchNotices = async () => {
    const research = await getResearchNoticesApi();
    setResearch(research.data);
  };

  const approveResearchNotice = async (researchNoticeId) => {
    await approveResearchNoticeApi(researchNoticeId);
    getResearchNotices();
  };

  const deleteResearchNotice = async (researchNoticeId) => {
    await deleteResearchNoticeApi(researchNoticeId);
    getResearchNotices();
  };

  const showResearchRows = () => {
    if (!research.length) return null;
    return research.map((row) => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>{row.topicInterests}</td>
          <td>{row.authors}</td>
          <td>
            <Link
              to={`/admin/research-notices/${row._id}`}
              className="btn btn-primary"
            >
              View
            </Link>
          </td>
          <td>
            <Button
              onClick={() => approveResearchNotice(row._id)}
              disabled={row.status !== "PENDING_REVIEW"}
            >
              {row.status === "PENDING_REVIEW" ? "Approve" : "Approved"}
            </Button>
          </td>
          <td>
            <Button
              onClick={() => deleteResearchNotice(row._id)}
              variant="danger"
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    getResearchNotices();
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <h4>Available Research Notices</h4>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Topic Interests</td>
            <td>Authors</td>
            <td>View</td>
            <td>Approve</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>{showResearchRows()}</tbody>
      </Table>
    </Container>
  );
};

export default ViewResearchNotices;
