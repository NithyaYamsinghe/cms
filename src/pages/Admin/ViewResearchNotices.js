import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBox from "../../../common/SearchBox/SearchBox";

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

const ViewResearchNotices = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SearchBox placeholder="search" />
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Topics</StyledTableCell>
              <StyledTableCell align="right">Authors</StyledTableCell>
              <StyledTableCell align="right">Submission</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">View</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Smart Mask
              </StyledTableCell>
              <StyledTableCell align="right">
                This is a IOT based mask
              </StyledTableCell>
              <StyledTableCell align="right">
                Internet of Things, Machine Learning
              </StyledTableCell>
              <StyledTableCell align="right">N.R. Yamasinghe</StyledTableCell>
              <StyledTableCell align="right">PDF</StyledTableCell>
              <StyledTableCell align="right">Approved</StyledTableCell>
              <StyledTableCell align="right">
                <button type="button" class="btn btn-primary">
                  View
                </button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <button type="button" class="btn btn-success">
                  Update
                </button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ViewResearchNotices;
