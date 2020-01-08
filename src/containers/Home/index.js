import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

import Header from "../../components/Header";
import Users from "../../components/Users";
// API Services
import { getUsers } from "../../services/userService";
// Actions
import { getUsersSuccess, getUsersFailed } from "../../actions/users";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.users.results);
  const [message, setMessage] = useState({ message: "", type: "", color: "" });

  useEffect(() => {
    // Call getUsers API to retrieve users data
    getUsers({ count: 50 })
      .then(response => {
        // Response handling
        if (response.status === "success") {
          setMessage({
            message: "Users data retrieved success",
            type: "success",
            color: "info"
          });
          dispatch(getUsersSuccess(response.data));
        } else {
          setMessage({
            message: response.message,
            type: "error",
            color: "error"
          });
          dispatch(getUsersFailed(response.message));
        }
      })
      .catch(() => {
        setMessage({
          message: "Something went wrong, please try again",
          type: "error",
          color: "error"
        });
        dispatch(getUsersFailed("Something went wrong, please try again"));
      });
  }, [dispatch]);

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") return;
    setMessage({ message: "", type: "", color: "" });
  };

  return (
    <div className="App">
      <Header />
      <Container>
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
        <Users data={userData || []} />
      </Container>
    </div>
  );
};

export default Home;
