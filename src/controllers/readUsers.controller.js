import readUsersService from "../services/readUsers.service";

const readUsersController = (req, res) => {
  const usersList = readUsersService();

  return res.status(200).json(usersList);
};

export default readUsersController;
