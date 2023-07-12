import React from "react";
import { Container, Text } from "@mantine/core";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLoggedIn = !!auth?.accessToken;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Editor", path: "/editor" },
    { name: "Purchase Plan", path: "/purchaseplan" },
    { name: "Deploy", path: "/deploy" },
  ];

  if (!isLoggedIn) {
    navItems.push({ name: "Login", path: "/login" });
    navItems.push({ name: "Register", path: "/register" });
  }

  const navigate = useNavigate();
  const signOut = async () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        zIndex: 2,
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          maxWidth: "1500px",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {navItems.map((item, index) => (
          <li key={index} style={{ height: "80px" }}>
            <Text
              component={RouterLink}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: "1.3rem",
                color: "white",
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000",
                justifyContent: "center",
                height: "100%",
                padding: "0 1.5rem",
              }}
            >
              {item.name}
            </Text>
          </li>
        ))}
        {isLoggedIn && (
          <li style={{ height: "80px", background: "transparent" }}>
            <Text
              component={RouterLink}
              to="#"
              onClick={signOut}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: "1.3rem",
                color: "white",
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000",
                justifyContent: "center",
                height: "100%",
                padding: "0 1.5rem",
              }}
            >
              Sign Out
            </Text>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default Navbar;
