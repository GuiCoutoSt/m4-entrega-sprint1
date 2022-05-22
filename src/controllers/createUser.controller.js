import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  const newUser = await createUserService(name, email, password, isAdm);

  return res.status(201).json(newUser);
};

export default createUserController;
