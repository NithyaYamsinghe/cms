import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useAuth } from "./../../context/authContext";

const AddressForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState();
  const [country, setCountry] = useState("");
  const { currentUserType } = useAuth();

  useEffect(async () => {
    if (currentUserType === "RESEARCHER") {
      setAmount(10000);
    }
    if (currentUserType === "ATTENDEE") {
      setAmount(2000);
    }
  }, []);

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("amount", amount);
  localStorage.setItem("country", country);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={"outlined"}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant={"outlined"}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={"outlined"}
            required
            id="amount"
            name="amount"
            label="Recharge Amount"
            fullWidth
            autoComplete="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={"outlined"}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
