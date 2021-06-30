import React from "react";
import UpdateWorkShopForm from "./../components/WorkshopConductor/UpdateWorkShop/UpdateWorkShopForm";

const UpdateWorkShopScreen = ({ match }) => {
  return (
    <div>
      <UpdateWorkShopForm match={match} />
    </div>
  );
};

export default UpdateWorkShopScreen;
