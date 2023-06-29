import React from "react";
import { Paper, Button, Grid, Col } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
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
        {" "}
        Welcome to the Spectacular Online Workshop for Websites!{" "}
        <Grid
          span={16}
          style={{ margin: "85px" }}
          gutter="md"
          display="flex"
          justify="center"
        >
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button fullWidth color="blue" radius="xl">
              Log In
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button fullWidth color="green" radius="xl">
              Try For Free
            </Button>
          </Link>
        </Grid>
      </Paper>
    </div>
  );
};

export default HomePage;
