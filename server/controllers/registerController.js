const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password)
    return res
      .status(400)
      .json({ message: "Email, username, and password are required." });
  // check for duplicate emails and usernames in the db
  const duplicate = await User.findOne({
    $or: [{ email }, { username }],
  }).exec();
  if (duplicate) return res.sendStatus(409);
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    //create and store the new user
    const result = await User.create({
      email,
      username,
      password: hashedPwd,
      roles: {
        Premium: 0,
        User: 1974,
        Trial: 2001,
      },
    });
    res.status(201).json({ success: `New user ${username} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
