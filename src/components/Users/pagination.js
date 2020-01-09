import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import { paginationStyle } from "./styles";

/**
 * User pagination component
 * @param {number} count
 * @param {number} page
 * @param {number} rowsPerPage
 * @param {function} onChangePage
 */

const UsersPagination = ({ count, page, rowsPerPage, onChangePage }) => {
  const classes = paginationStyle();

  // Navigate to first page
  const handleFirstPageClick = event => {
    onChangePage(event, 0);
  };
  // Navigate to last page
  const handleLastPageClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  // Navigate to previous page
  const handleBackClick = event => {
    onChangePage(event, page - 1);
  };
  // Navigate to next page
  const handleNextClick = event => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

UsersPagination.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default UsersPagination;
