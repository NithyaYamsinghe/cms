import React, { useEffect, useState } from "react";
import { useAuth } from "./../../../context/authContext";

const ViewResearch = ({ match }) => {
  const { getResearchById } = useAuth();
  const [researchId, setResearchId] = useState("");
  const [description, setDescription] = useState("");
  const [topics, setTopics] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");

  useEffect(async () => {
    const data = await getResearchById(match.params.id);
    setResearchId(data.data[0]._id);
    setDescription(data.data[0].description);
    setTopics(data.data[0].topicInterests);
    setTitle(data.data[0].title);
    setStatus(data.data[0].status);
  }, []);

  const navigateToPayment = (e, researchId) => {
    window.location = `/user-payment/${researchId}`;
  };
  return (
    <div className="card dashboard-text">
      <h5 class="card-header">Research ID - {researchId}</h5>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6>Topic Interest: {topics}</h6>
        <p class="card-text">{description}</p>
        <p class="card-text">Status: {status}</p>
        {status === "APPROVED" && (
          <a
            onClick={(e) => navigateToPayment(e, researchId)}
            class="btn btn-primary"
          >
            PAYMENT NOT COMPLETED
          </a>
        )}
        {status === "PAID" && (
          <a
            onClick={(e) => navigateToPayment(e, researchId)}
            class="btn btn-primary"
          >
            PAYMENT SUCCESSFUL
          </a>
        )}
      </div>
    </div>
  );
};

export default ViewResearch;
