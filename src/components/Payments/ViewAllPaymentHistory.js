import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBox from "./../../common/SearchBox/SearchBox";
import moment from "moment";
import { useAuth } from "./../../context/authContext";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ViewAllResearchDocuments = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const { currentUserID, getPayment } = useAuth();

  useEffect(async () => {
    const data = await getPayment(currentUserID);
    setData(data.data);
  }, []);

  return (
    <React.Fragment>
      <SearchBox placeholder="search" />
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Payment ID</StyledTableCell>
              <StyledTableCell align="right">Recipet ID</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell component="th" scope="row">
                  {item._id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {item.receiptId}
                </StyledTableCell>
                <StyledTableCell align="right">research paper</StyledTableCell>
                <StyledTableCell align="right">{item.paidFor}</StyledTableCell>
                <StyledTableCell align="right">{item.amount}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {moment(item.paidDate).format("YYYY-MM-DD")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {moment(item.paidDate).format("hh:mm:ss a")}
                </StyledTableCell>
                <StyledTableCell align="right">{item.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <button type="button" class="btn btn-primary">
                    View
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ViewAllResearchDocuments;
