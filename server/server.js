const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());


const dbURI =
  "username+password come here";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.use(authRoutes);
