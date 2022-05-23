import usersDB from "../database/users.database";

import jwt from "jsonwebtoken";

const verifyUpdateRequest = (req, res, next) => {
  const { uuid } = req.params;

  const userIndex = usersDB.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const bodyRequest = req.body;

  if ("isAdm" in bodyRequest) {
    return res
      .status(401)
      .json({ message: "You can't change the isAdm property" });
  }

  let token = req.headers.authorization;

  token = token.split(" ")[1];

  const decodedToken = jwt.decode(token);

  const findedUser = usersDB.find((user) => user.email === decodedToken.email);

  if (uuid !== findedUser.uuid && !findedUser.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyUpdateRequest;
