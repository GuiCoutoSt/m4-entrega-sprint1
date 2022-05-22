import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = userLoginService(email, password);

  return res.status(200).json({ token: userLogin });
};

export default userLoginController;
