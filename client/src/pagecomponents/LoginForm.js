import React, { useState } from "react";
import { Paper, Col, Grid, TextInput, Button, Text } from "@mantine/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const { loading, error } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ user, pwd }));
    if (!error) {
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
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
          <form onSubmit={handleSubmit}>
            <Grid gutter="md" style={{ margin: "5px" }}>
              <Col span={12}>
                <Text color="red">{error ? error : ""}</Text>

                <TextInput
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
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
            </Grid>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default LoginForm;
