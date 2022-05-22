import readUsersService from "../services/readUsers.service";

const readUsersController = (req, res) => {
  const usersList = readUsersService();

  return res.status(200).json({ users: usersList });
};

export default readUsersController;
