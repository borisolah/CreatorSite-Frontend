import React, { useEffect } from "react";
import { Paper, Col, Grid, TextInput, Button, Text } from "@mantine/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  setInputUser,
  setInputPwd,
  clearInputUserPwd,
} from "../redux/slices/loginSlice";
import useAuth from "./hooks/useAuth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { inputUser, inputPwd, error } = useSelector((state) => state.login);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ user: inputUser, pwd: inputPwd }));
  };

  // useEffect - login in Redux is async
  // navigate waits for login to happen
  useEffect(() => {
    if (auth.user) {
      dispatch(clearInputUserPwd());
      navigate(from, { replace: true });
    }
  }, [auth, dispatch, navigate, from]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          paddingTop: "10%",
        }}
      >
        <Paper
          padding="xl"
          style={{
            backgroundColor: "rgba(128,128,128,0.5)",
            borderRadius: "5%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid gutter="md" style={{ margin: "5px" }}>
              <Col span={12}>
                <Text color="red">{ error && {error}}</Text>

                <TextInput
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  autoComplete="off"
                  onChange={(e) => dispatch(setInputUser(e.target.value))}
                  value={inputUser}
                  required
                />
              </Col>
            </Grid>
            <Grid gutter="md" style={{ margin: "5px" }}>
              <Col span={12}>
                <TextInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => dispatch(setInputPwd(e.target.value))}
                  value={inputPwd}
                  required
                />
              </Col>
            </Grid>
            <Grid gutter="md" style={{ margin: "5px" }}>
              <Col span={6}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button fullWidth color="red" radius="xl">
                    Back
                  </Button>
                </Link>
              </Col>
              <Col span={6}>
                <Button
                  fullWidth
                  color="green"
                  radius="xl"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Col>
            </Grid>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default LoginForm;
