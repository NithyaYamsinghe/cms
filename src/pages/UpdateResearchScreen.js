import React from "react";
import UpdateResearchForm from "./../components/Researcher/UpdateResearch/UpdateResearchForm";

const UpdateResearchScreen = ({ match }) => {
  return (
    <div>
      <UpdateResearchForm match={match} />
    </div>
  );
};

export default UpdateResearchScreen;
