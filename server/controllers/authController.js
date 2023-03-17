const User = require("../models/User");
const jwt = require("jsonwebtoken");

//error handler
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  //duplicate error
  if (err.code === 11000) {
    errors.email = "That E-mail is already registered.";
    return errors;
  }
  if (err.message.includes("user validation failed")) {
    // validation errors
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const dayInSeconds = 86400;
const expirationTime = 3 * dayInSeconds;
const expTimeMilisec = expirationTime * 1000
const createToken = (id) => {
  return jwt.sign({ id }, "string secret comes here", {
    expiresIn: expirationTime,
  });
};

// controller actions
module.exports.signup_get = (req, res) => {
  res.send("signup");
};

module.exports.login_get = (req, res) => {
  res.send("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: expTimeMilisec });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  res.send("user login");
};
