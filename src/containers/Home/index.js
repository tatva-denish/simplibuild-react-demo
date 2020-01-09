import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "../../components/Header";
import Users from "../../components/Users";
// API Services
import { getUsers } from "../../services/userService";
// Actions
import { getUsersSuccess, getUsersFailed } from "../../actions/users";
import { loaderStyle } from "./styles";

const Home = () => {
  const classes = loaderStyle();

  const dispatch = useDispatch(); // Dispatch actions
  const userData = useSelector(state => state.users.results); // Get users list from store
  const [message, setMessage] = useState({ message: "", type: "", color: "" }); // Notification message state
  const [loader, setloader] = useState(false); // Loader state

  useEffect(() => {
    // Call getUsers API to retrieve users data
    setloader(true); // Enable loader
    getUsers({ count: 50 })
      .then(response => {
        setloader(false); // Disable loader
        // Response handling
        if (response.status === "success") {
          // Display success message and store data in redux
          setMessage({
            message: "Users data retrieved success",
            type: "success",
            color: "info"
          });
          dispatch(getUsersSuccess(response.data));
        } else {
          // Display error message if error occurred
          setMessage({
            message: response.message,
            type: "error",
            color: "error"
          });
          dispatch(getUsersFailed(response.message));
        }
      })
      .catch(() => {
        setloader(false); // Disable loader
        // Error handling if API failed
        setMessage({
          message: "Something went wrong, please try again",
          type: "error",
          color: "error"
        });
        dispatch(getUsersFailed("Something went wrong, please try again"));
      });
  }, [dispatch]);

  // Notification message handling
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") return;
    setMessage({ message: "", type: "", color: "" });
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Backdrop className={classes.backdrop} open={loader}>
          <CircularProgress color="inherit" />
        </Backdrop>
        {!loader && <Users data={userData || []} />}
        {message.message && (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            onClose={handleToastClose}
          >
            <Alert
              severity={message.type}
              color={message.color}
              onClose={handleToastClose}
            >
              {message.message}
            </Alert>
          </Snackbar>
        )}
      </Container>
    </div>
  );
};

export default Home;
