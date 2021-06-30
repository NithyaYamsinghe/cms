import React from "react";
import ViewWorkShop from "./../components/WorkshopConductor/ViewWorkShop/ViewWorkShop";

const ViewWorkShopScreen = ({ match }) => {
  return (
    <div
      className="mt-5 mb-5"
      style={{
        marginLeft: "200px",
        marginRight: "50px",
      }}
    >
      <ViewWorkShop match={match} />
    </div>
  );
};

export default ViewWorkShopScreen;
