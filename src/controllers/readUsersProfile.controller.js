import { response } from "express";
import readUserProfileService from "../services/readUserProfile.service";

const readUserProfileController = (req, res) => {
  const { token } = req.headers.authorization;

  const findUser = readUserProfileService(token);

  return res.status(200).json(findUser);
};

export default readUserProfileController;
