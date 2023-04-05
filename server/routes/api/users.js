const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(
    verifyRoles(ROLES_LIST.Premium, ROLES_LIST.User, ROLES_LIST.Trial),
    usersController.createNewUser
  )
  .put(
    verifyRoles(ROLES_LIST.Premium, ROLES_LIST.User),
    usersController.updateUser
  )
  .delete(
    verifyRoles(ROLES_LIST.Premium, ROLES_LIST.User),
    usersController.deleteUser
  );

router.route("/:id").get(usersController.getUser);

module.exports = router;
