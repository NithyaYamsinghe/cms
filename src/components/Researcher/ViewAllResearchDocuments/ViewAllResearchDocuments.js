import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import SearchBox from "../../../common/SearchBox/SearchBox";
import { useAuth } from "./../../../context/AuthContext";

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
  const { getResearch, currentUserID } = useAuth();

  const navigateUpdateResearch = (e, researchId) => {
    window.location = `/update-research/${researchId}`;
  };

  useEffect(async () => {
    const data = await getResearch(currentUserID);
    setData(data.data);
  }, []);

  console.log(data);
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
              <StyledTableCell align="right">Submitted</StyledTableCell>
              <StyledTableCell align="right">Topics</StyledTableCell>
              <StyledTableCell align="right">Authors</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              {/* <StyledTableCell align="right">Download</StyledTableCell> */}
              <StyledTableCell align="right">View</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {moment(item.createdDate).format("YYYY-MM-DD")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.topicInterests}
                </StyledTableCell>
                <StyledTableCell align="right">{item.authors}</StyledTableCell>
                <StyledTableCell align="right">{item.status}</StyledTableCell>
                {/* <StyledTableCell align="right">
                  <button type="button" class="btn btn-warning">
                    PDF
                  </button>
                </StyledTableCell> */}
                <StyledTableCell align="right">
                  <button type="button" class="btn btn-primary">
                    View
                  </button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={(e) => navigateUpdateResearch(e, item._id)}
                  >
                    Update
                  </button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button type="button" class="btn btn-danger">
                    Delete
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
