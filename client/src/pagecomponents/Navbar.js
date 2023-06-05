import { Box, Link } from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import useLogout from "./hooks/useLogout";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Editor", path: "/editor" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Purchase Plan", path: "/purchaseplan" },
    { name: "Deploy", path: "/deploy" },
  ];
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="29px"
      fontSize="1.3rem"
      zIndex="1000" // Ensures navbar remains above other page elements
    >
      <Box
        as="ul"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80px"
        maxW="1500px"
        listStyleType="none"
      >
        {navItems.map((item, index) => (
          <Box as="li" height="80px" key={index}>
            <Link
              as={RouterLink}
              to={item.path}
              display="flex"
              alignItems="center"
              textDecoration="none"
              color="white"
              fontSize="1.3rem"
              textShadow="1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000"
              justifyContent="center"
              height="100%"
              px="1.5rem"
            >
              {item.name}
            </Link>
          </Box>
        ))}{" "}
        <button onClick={signOut}>Sign Out</button>
      </Box>
    </Box>
  );
};

export default Navbar;
