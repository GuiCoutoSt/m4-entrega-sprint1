import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const { uuid } = req.params;

  const deletedUser = deleteUserService(uuid);

  return res.status(200).json({ message: deletedUser });
};

export default deleteUserController;
