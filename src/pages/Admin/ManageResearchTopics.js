import { useEffect, useState } from "react";
import {
  createResearchTopicApi,
  getResearchTopicsApi,
} from "../../services/researchService";
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageResearchTopics = () => {
  const { handleSubmit, register } = useForm();

  const [researchTopics, setResearchTopics] = useState([]);

  const getResearchTopics = async () => {
    const researchTopics = await getResearchTopicsApi();
    setResearchTopics(researchTopics.data);
  };

  const createResearchTopic = async (data) => {
    await createResearchTopicApi(data);
    getResearchTopics();
  };

  const handleOnSubmit = (data) => createResearchTopic(data);

  const showResearchTopicRows = () => {
    if (!researchTopics.length) return null;
    return researchTopics.map((row) => {
      return (
        <tr>
          <td>{row.name}</td>
          <td>{row.description}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    getResearchTopics();
  });

  return (
    <Container>
      <h4 className="my-3">Manage Research Topic Interests</h4>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Form.Group as={Row} className="my-3" sm="5">
          <Form.Label column>Research Topic Title:</Form.Label>
          <Col sm="5">
            <Form.Control {...register("name")} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} sm="5">
          <Form.Label column>Research Topic Description:</Form.Label>
          <Col sm="5">
            <Form.Control {...register("description")} />
          </Col>
        </Form.Group>
        <Button type="submit" className="my-3">
          Create
        </Button>
      </Form>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>{showResearchTopicRows()}</tbody>
      </Table>
    </Container>
  );
};

export default ManageResearchTopics;
