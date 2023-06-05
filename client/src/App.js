import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pagecomponents/Navbar";
import Home from "./pagecomponents/HomePage.js";
import RegisterForm from "./pagecomponents/RegisterForm.js";
import LoginForm from "./pagecomponents/LoginForm";
import About from "./pagecomponents/AboutPage";
import Editor from "./pagecomponents/EditorPage";
import RequireAuth from "./pagecomponents/authcontrollers/RequireAuth";
import PurchasePlan from "./pagecomponents/PurchasePlan";
import Deploy from "./pagecomponents/DeployPage";
import PersistLogin from "./pagecomponents/logincomponents/PersistLogin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <Box position="relative" overflow="hidden">
              <RegisterForm />
            </Box>
          }
        />
        <Route path="/purchaseplan" element={<PurchasePlan />} />
        <Route
          path="/login"
          element={
            <Box position="relative" overflow="hidden">
              <LoginForm />
            </Box>
          }
        />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[1974]} />}>
            <Route path="/editor" element={<Editor />} />
            <Route path="/about" element={<About />} />{" "}
          </Route>
          <Route element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="/deploy" element={<Deploy />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
