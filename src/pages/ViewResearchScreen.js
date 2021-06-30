import React from "react";
import ViewResearch from "./../components/Researcher/ViewResearch/ViewResearch";

const ViewResearchScreen = ({ match }) => {
  return (
    <div
      className="mt-5 mb-5"
      style={{
        marginLeft: "200px",
        marginRight: "50px",
      }}
    >
      <ViewResearch match={match} />
    </div>
  );
};

export default ViewResearchScreen;
