import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getStatsApi } from "../../services/adminService";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  const getStats = async () => {
    const stats = await getStatsApi();
    setStats(stats.data);
  };

  useEffect(() => {
    getStats();
  }, []);
  if (!stats) return null;
  return (
    <Container>
      <h4 className="my-3">Admin Dashboard</h4>
      <h5>Research Deails</h5>
      <Row className="mb-3">
        <Col>Total Research Notices:</Col>
        <Col>{stats.researchNotices}</Col>
        <Col>Approved Research Notices:</Col>
        <Col>{stats.approvedResearchNotices}</Col>
      </Row>
      <h5>Workshop Details</h5>
      <Row className="mb-3">
        <Col>Total Workshop Notices:</Col>
        <Col>{stats.workshopNotices}</Col>
        <Col>Approved Research Topics:</Col>
        <Col>{stats.approvedWorkshopNotices}</Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
