import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Avatar,
  Typography
} from "@material-ui/core";

import { tableContainerStyle } from "./styles";
import UsersPagination from "./pagination";

/**
 * Users Listing
 * @param {object} data
 */
const UsersTable = ({ data }) => {
  const classes = tableContainerStyle();

  const [currentPage, setCurrentPage] = useState(0); // Current page state
  const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page for table

  // Count empty rows
  const emptyItems =
    itemsPerPage -
    Math.min(itemsPerPage, data.length - currentPage * itemsPerPage);
  // Users data filters for pagination
  const usersData =
    itemsPerPage > 0
      ? data.slice(
          currentPage * itemsPerPage,
          currentPage * itemsPerPage + itemsPerPage
        )
      : data;

  // Page change event handler
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  // Items per page change event handler
  const handleChangeItemsPerPage = event => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  // Display message if no any item found
  if (usersData && !usersData.length) {
    return (
      <TableContainer className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          No results found
        </Typography>
      </TableContainer>
    );
  }

  return (
    <Paper>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map(row => (
              <TableRow key={row.email}>
                <TableCell component="th" scope="row">
                  {(row.picture && <Avatar src={row.picture.thumbnail} />) || (
                    <Avatar>
                      {row.name && row.name.first.charAt(0).toUpperCase()}
                    </Avatar>
                  )}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name && row.name.first} {row.name && row.name.last}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell>{row.location && row.location.city}</TableCell>
                <TableCell>{row.location && row.location.state}</TableCell>
              </TableRow>
            ))}

            {emptyItems > 0 && (
              <TableRow style={{ height: 53 * emptyItems }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={5}
        count={data.length}
        rowsPerPage={itemsPerPage}
        page={currentPage}
        SelectProps={{
          inputProps: { "aria-label": "items per page" },
          native: true
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeItemsPerPage}
        ActionsComponent={UsersPagination}
      />
    </Paper>
  );
};

export default UsersTable;
