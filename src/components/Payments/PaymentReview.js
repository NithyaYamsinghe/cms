import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const PaymentReview = () => {
  const classes = useStyles();
  const cardName = localStorage.getItem("cardName");
  const cardNumber = localStorage.getItem("cardNumber");
  const expDate = localStorage.getItem("expDate");
  const cvv = localStorage.getItem("cvv");

  const payments = [
    { name: "CVV", detail: cvv },
    { name: "Card holder", detail: cardName },
    { name: "Card number", detail: cardNumber },
    { name: "Expiry date", detail: expDate },
  ];
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentReview;
