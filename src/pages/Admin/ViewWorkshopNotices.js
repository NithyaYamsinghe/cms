import { useState, useEffect } from "react";
import { Table, Container, Button, Row } from "react-bootstrap";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  getWorkshopNoticesApi,
  approveWorkshopNoticeApi,
  deleteWorkshopNoticeApi,
} from "../../services/workshopService";

const ViewWorkshopNotices = () => {
  const [workshops, setWorkshops] = useState([]);

  const getWorkshopNotices = async () => {
    const workshops = await getWorkshopNoticesApi();
    setWorkshops(workshops.data);
  };

  const approveWorkshopNotice = async (workshopNoticeId) => {
    await approveWorkshopNoticeApi(workshopNoticeId);
    getWorkshopNotices();
  };

  const deleteWorkshopNotice = async (researchNoticeId) => {
    await deleteWorkshopNoticeApi(researchNoticeId);
    getWorkshopNotices();
  };

  const showWorkshopRows = () => {
    if (!workshops.length) return null;
    return workshops.map((row) => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>{row.persons}</td>
          <td>
            <Moment format="YYYY/MM/DD">{row.startDate}</Moment>
          </td>
          <td>
            <Moment format="YYYY/MM/DD hh:mm A">{row.endTime}</Moment>
          </td>
          <td>
            <Link
              to={`/admin/workshop-notices/${row._id}`}
              className="btn btn-primary"
            >
              View
            </Link>
          </td>
          <td>
            <Button
              onClick={() => approveWorkshopNotice(row._id)}
              disabled={row.status !== "PENDING_REVIEW"}
            >
              {row.status === "PENDING_REVIEW" ? "Approve" : "Approved"}
            </Button>
          </td>
          <td>
            <Button
              onClick={() => deleteWorkshopNotice(row._id)}
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
    getWorkshopNotices();
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <h4>Available Workshop Notices</h4>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Persons</td>
            <td>Start Date</td>
            <td>End Time</td>
            <td>View</td>
            <td>Approve</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>{showWorkshopRows()}</tbody>
      </Table>
    </Container>
  );
};

export default ViewWorkshopNotices;
