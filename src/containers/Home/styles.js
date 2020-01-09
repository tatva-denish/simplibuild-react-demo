import { makeStyles } from "@material-ui/core/styles";

// Loader style
const loaderStyle = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export { loaderStyle };
