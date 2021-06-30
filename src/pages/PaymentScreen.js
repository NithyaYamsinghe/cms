import React from "react";
import PaymentCheckout from "./../components/Payments/PaymentCheckout";

const PaymentScreen = ({ match }) => {
  return (
    <React.Fragment
      style={{
        marginLeft: "200px",
        marginRight: "50px",
      }}
    >
      <PaymentCheckout match={match} />
    </React.Fragment>
  );
};

export default PaymentScreen;
