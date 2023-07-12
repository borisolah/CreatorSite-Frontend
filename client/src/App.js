import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pagecomponents/Navbar";
import Home from "./pagecomponents/HomePage.js";
import RegisterForm from "./pagecomponents/RegisterForm.js";
import LoginForm from "./pagecomponents/LoginForm";
import About from "./pagecomponents/AboutPage";
import Editor from "./pagecomponents/editorpage/EditorPage";
import RequireAuth from "./pagecomponents/authcontrollers/RequireAuth";
import PurchasePlan from "./pagecomponents/PurchasePlan";
import Deploy from "./pagecomponents/DeployPage";
import PersistLogin from "./pagecomponents/PersistLogin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/purchaseplan" element={<PurchasePlan />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/editor" element={<Editor />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[1974]} />}>
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
