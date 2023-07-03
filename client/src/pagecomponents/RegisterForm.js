import React, { useEffect } from "react";
import { Paper, Col, Grid, TextInput, Button, Text } from "@mantine/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  setEmail,
  setUsername,
  setPassword,
  setRepeatPassword,
  clearFields,
} from "../redux/slices/registerSlice";
import useAuth from "./hooks/useAuth";

function RegisterForm() {
  const { email, username, password, repeatPassword, isMatching, loading } =
    useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      dispatch(clearFields());
      navigate(from, { replace: true });
    }
  }, [auth, dispatch, navigate, from]);

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };
  const handleRepeatPasswordChange = (event) => {
    dispatch(setRepeatPassword(event.target.value));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (email && username && password && isMatching) {
      dispatch(registerUser({ email, username, password }));
    }
  };

  return (
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
        <form onSubmit={handleRegister}>
          <Grid gutter="md" style={{ margin: "5px" }}>
            <Col span={12}>
              <TextInput
                label="Username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </Col>
          </Grid>
          <Grid gutter="md" style={{ margin: "5px" }}>
            <Col span={12}>
              <TextInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Col>
          </Grid>
          <Grid gutter="md" style={{ margin: "5px" }}>
            <Col span={12}>
              <TextInput
                label="Repeat Password"
                type="password"
                placeholder="Repeat your password"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                required
              />
              {!isMatching && <Text color="red">Passwords do not match!</Text>}
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
                disabled={!isMatching || loading}
                type="submit"
              >
                Register
              </Button>
            </Col>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default RegisterForm;
