import { Box, Link } from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

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

  // Only add and Register to navItems if user is not logged in
  if (!isLoggedIn) {
    navItems.push({ name: "Login", path: "/login" });
    navItems.push({ name: "Register", path: "/register" }); // Moved after Login
  }

  const navigate = useNavigate();
  const signOut = async () => {
    dispatch(logout());
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
      zIndex="2"
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
        ))}
        {isLoggedIn && (
          <Box as="li" height="80px" background="transparent">
            <Link
              as={RouterLink}
              to="#"
              onClick={signOut}
              display="flex"
              alignItems="center"
              textDecoration="none"
              fontSize="1.3rem"
              color="white"
              textShadow="1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000"
              justifyContent="center"
              height="100%"
              px="1.5rem"
            >
              Sign Out
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
