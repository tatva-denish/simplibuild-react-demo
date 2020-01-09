import { makeStyles } from "@material-ui/core/styles";

// Pagination style
const paginationStyle = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

// Table container style
const tableContainerStyle = makeStyles(theme => ({
  container: {
    marginTop: "40px",
    marginBottom: "40px",
    maxHeight: 500
  }
}));

export { paginationStyle, tableContainerStyle };
