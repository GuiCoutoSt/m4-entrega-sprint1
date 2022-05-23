import readUserProfileService from "../services/readUserProfile.service";

const readUserProfileController = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  const findedUser = readUserProfileService(token);

  return res.status(200).json(findedUser);
};

export default readUserProfileController;
