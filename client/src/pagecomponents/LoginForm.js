import React, { useState, useRef } from "react";
import { Paper, Col, Grid, TextInput, Button, Text } from "@mantine/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "./authcontrollers/axios";
import useAuth from "./hooks/useAuth";

const LOGIN_URL = "/auth";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

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
          {" "}
          <form onSubmit={handleSubmit}>
            <Grid gutter="md" style={{ margin: "5px" }}>
              <Col span={12}>
                <Text color="red">{errMsg}</Text>

                <TextInput
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
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
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
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
            </Grid>{" "}
          </form>
        </Paper>
      </div>{" "}
    </>
  );
};

export default LoginForm;
