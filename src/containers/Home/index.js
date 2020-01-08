import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";

import Header from "../../components/Header";
import Users from "../../components/Users";
// API Services
import { getUsers } from "../../services/userService";
// Actions
import { getUsersSuccess, getUsersFailed } from "../../actions/users";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.users.results);

  useEffect(() => {
    // Call getUsers API to retrieve users data
    getUsers({ count: 50 })
      .then(response => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch(error => {
        dispatch(getUsersFailed("Something went wrong"));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Container>
        <Users data={userData} />
      </Container>
    </div>
  );
};

export default Home;
