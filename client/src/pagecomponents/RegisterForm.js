import React, { useState } from "react";
import { Paper, Col, Grid, TextInput, Button, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "./hooks/useRegisterHook";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);
  const { register, loading } = useRegister();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    setIsMatching(event.target.value === password);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (email && username && password && isMatching) {
      await register(email, username, password);
      navigate("/");
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
          {" "}
          {/* Wrap elements in a form tag */}
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
