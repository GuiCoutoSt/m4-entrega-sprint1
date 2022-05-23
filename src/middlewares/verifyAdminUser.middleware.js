import usersDB from "../database/users.database";

import jwt from "jsonwebtoken";

const verifyAdminUserMW = (req, res, next) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  const decodedToken = jwt.decode(token);

  const findedUser = usersDB.find((user) => user.email === decodedToken.email);

  if (!findedUser.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyAdminUserMW;
