import { useState, useEffect } from "react";
import { Table, Container, Row } from "react-bootstrap";
import {
  getAllWorkshops,
  createWorkshopNotice,
} from "../../services/EditorServices";

const ManageWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);

  const loadWorkshops = async () => {
    const getworkshops = await getAllWorkshops();
    setWorkshops(getworkshops.data);
  };

  const createWorkshopNotices = (e, workshopId) => {
    createWorkshopNotice(workshopId);
  };

  const showKeynoteRow = () => {
    if (!workshops.length) return null;
    return workshops.map((row) => {
      return (
        <tr>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>{row.persons}</td>
          <td>{row.startTime}</td>
          <td>{row.endTime}</td>
          <td>{row.status}</td>
          <td>
            {row.status === "NOTICE_CREATED" && "Notice Already Created"}{" "}
            {row.status === "PENDING_REVIEW" && (
              <button
                type="button"
                class="btn btn-primary"
                disabled
                onClick={(e) => createWorkshopNotice(row._id)}
              >
                Create Notice
              </button>
            )}
            {row.status === "REVIEWER_APPROVED" && (
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => createWorkshopNotice(row._id)}
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
    loadWorkshops();
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <h4>Manage Workshop Notices</h4>
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
        <tbody>{showKeynoteRow()}</tbody>
      </Table>
    </Container>
  );
};

export default ManageWorkshops;
