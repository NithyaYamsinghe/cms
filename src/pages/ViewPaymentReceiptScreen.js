import React from "react";
import ViewPaymentReceipt from "./../components/Payments/ViewPaymentReceipt";

const ViewPaymentReceiptScreen = ({ match }) => {
  return (
    <div
      className="mt-5 mb-5"
      style={{
        marginLeft: "200px",
        marginRight: "50px",
      }}
    >
      <ViewPaymentReceipt match={match} />
    </div>
  );
};

export default ViewPaymentReceiptScreen;
