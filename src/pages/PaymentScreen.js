import React from "react";
import PaymentCheckout from "./../components/Payments/PaymentCheckout";

const PaymentScreen = () => {
  return (
    <React.Fragment
      style={{
        marginLeft: "200px",
        marginRight: "50px",
      }}
    >
      <PaymentCheckout />
    </React.Fragment>
  );
};

export default PaymentScreen;
