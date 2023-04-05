const data = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const getAllUsers = (req, res) => {
  res.json(data.users);
};

const createNewUser = (req, res) => {
  const newUser = {
    id: data.users?.length ? data.users[data.users.length - 1].id + 1 : 1,
    username: req.body.username,
    password: req.body.password,
  };
  if (!newUser.username || !newUser.password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  data.setUsers([...data.users, newUser]);
  res.status(201).json(data.users);
};

const updateUser = (req, res) => {
  const user = data.users.find((usr) => usr.id === parseInt(req.body.id));
  if (!user) {
    return res
      .status(400)
      .json({ message: `User ID ${req.body.id} not found` });
  }
  if (req.body.username) user.username = req.body.username;
  if (req.body.password) user.password = req.body.password;
  const filteredArray = data.users.filter(
    (usr) => usr.id !== parseInt(req.body.id)
  );
  const unsortedArray = [...filteredArray, user];
  data.setUsers(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  res.json(data.users);
};

const deleteUser = (req, res) => {
  const user = data.users.find((usr) => usr.id === parseInt(req.body.id));
  if (!user) {
    return res
      .status(400)
      .json({ message: `User ID ${req.body.id} not found` });
  }
  const filteredArray = data.users.filter(
    (usr) => usr.id !== parseInt(req.body.id)
  );
  data.setUsers([...filteredArray]);
  res.json(data.users);
};

const getUser = (req, res) => {
  const user = data.users.find((usr) => usr.id === parseInt(req.params.id));
  if (!user) {
    return res
      .status(400)
      .json({ message: `User ID ${req.params.id} not found` });
  }
  res.json(user);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
};
