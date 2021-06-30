import React, { useEffect, useState } from "react";
import { useAuth } from "./../../context/authContext";
import moment from "moment";
import { Card } from "react-bootstrap";

const ViewPaymentReceipt = ({ match }) => {
  const { getPaymentById } = useAuth();
  const [receiptId, setReceiptId] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(async () => {
    const data = await getPaymentById(match.params.id);
    setDescription(data.data[0].description);
    setAmount(data.data[0].amount);
    setType(data.data[0].paidFor);
    setStatus(data.data[0].status);
    setDate(data.data[0].paidDate);
    setReceiptId(data.data[0].receiptId);
  }, []);
  return (
    <div>
      <Card border="info" className="dashboard-text">
        <Card.Header>Receipt Id - {receiptId}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Payment Type: {type}</Card.Text>
          <Card.Text>Amount: Rs.{amount}</Card.Text>
          <Card.Text> Paid Date: {moment(date).format("YYYY-MM-DD")}</Card.Text>
          <Card.Text>Paid Time:{moment(date).format("hh:mm:ss a")}</Card.Text>
          <Card.Text>Status:{status}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewPaymentReceipt;
