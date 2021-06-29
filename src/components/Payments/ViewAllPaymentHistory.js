import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBox from "./../../common/SearchBox/SearchBox";

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
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                RP124566
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                ICAF1267
              </StyledTableCell>
              <StyledTableCell align="right">research paper</StyledTableCell>
              <StyledTableCell align="right">
                approved research paper submission
              </StyledTableCell>
              <StyledTableCell align="right">Rs.1000.00</StyledTableCell>
              <StyledTableCell align="right">2021-06-29</StyledTableCell>
              <StyledTableCell align="right">12.30 a.m</StyledTableCell>
              <StyledTableCell align="right">Success</StyledTableCell>
              <StyledTableCell align="right">
                <button type="button" class="btn btn-primary">
                  View
                </button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ViewAllResearchDocuments;
