import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const { uuid } = req.params;
  const { name, email } = req.body;

  const updatedUser = updateUserService(uuid, name, email);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
