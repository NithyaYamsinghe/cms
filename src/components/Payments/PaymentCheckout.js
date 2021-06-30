import React from "react";
import PaymentReview from "./PaymentReview";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Step from "@material-ui/core/Step";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "./../../context/authContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Personal Details", "Payment Details", "Summary"];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <PaymentReview />;
    default:
      throw new Error("Unknown step");
  }
}
const PaymentCheckout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const { createPayment, currentUserID } = useAuth();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      const cardName = localStorage.getItem("cardName");
      const cardNumber = localStorage.getItem("cardNumber");
      const expDate = localStorage.getItem("expDate");
      const cvv = localStorage.getItem("cvv");
      const firstName = localStorage.getItem("firstName");
      const lastName = localStorage.getItem("lastName");
      const amountString = localStorage.getItem("amount");
      const amount = parseFloat(amountString);
      const country = localStorage.getItem("country");
      const user = currentUserID;

      const data = {
        firstname: firstName,
        lastname: lastName,
        amount: amount,
        country: country,
        cardname: cardName,
        cardNumber: cardNumber,
        expDate: expDate,
        cvv: cvv,
        paidFor: "IOT research paper",
        user: user,
      };

      createPayment(data);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <React.Fragment>
      <main
        className={classes.layout}
        style={{
          marginLeft: "200px",
          marginRight: "50px",
          fontFamily: `"Oswald", sans-serif !important`,
        }}
      >
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center"></Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you!
                </Typography>
                <Typography variant="subtitle1">
                  Your account has successfully recharged. We have emailed your
                  e recipet to your email.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Recharge" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default PaymentCheckout;
