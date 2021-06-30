import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBox from "../../../common/SearchBox/SearchBox";
import moment from "moment";
import { useAuth } from "./../../../context/authContext";

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

const ViewAllWorkShops = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const { getworkshop, deleteWorkshop, currentUserID } = useAuth();

  const navigateUpdateWorkshop = (e, workshopId) => {
    window.location = `/update-workshop/${workshopId}`;
  };

  const navigateViewWorkshop = (e, workshopId) => {
    window.location = `/view-workshop/${workshopId}`;
  };

  const deleteWorkshopSubmission = (e, workshopId) => {
    deleteWorkshop(workshopId);
  };

  useEffect(async () => {
    const data = await getworkshop(currentUserID);
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
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Start</StyledTableCell>
              <StyledTableCell align="right">End</StyledTableCell>
              <StyledTableCell align="right">Conducted By</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              {/* <StyledTableCell align="right">Proposal</StyledTableCell> */}
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
                  {moment(item.startDate).format("YYYY-MM-DD")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.startTime}
                </StyledTableCell>
                <StyledTableCell align="right">{item.endTime}</StyledTableCell>
                <StyledTableCell align="right">{item.persons}</StyledTableCell>
                {/* <StyledTableCell align="right">PDF</StyledTableCell> */}
                <StyledTableCell align="right">{item.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={(e) => navigateViewWorkshop(e, item._id)}
                  >
                    View
                  </button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={(e) => navigateUpdateWorkshop(e, item._id)}
                  >
                    Update
                  </button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={(e) => deleteWorkshopSubmission(e, item._id)}
                  >
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

export default ViewAllWorkShops;
