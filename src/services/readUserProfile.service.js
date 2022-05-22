import usersDB from "../database/users.database";

import jwt from "jsonwebtoken";

const readUserProfileService = (token) => {
  const decodedToken = jwt.decode(token);

  const findedUser = usersDB.find((user) => user.email === decodedToken.email);

  return findedUser;
};

export default readUserProfileService;
