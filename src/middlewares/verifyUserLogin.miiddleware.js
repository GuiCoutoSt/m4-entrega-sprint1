import usersDB from "../database/users.database";

import * as bcrypt from "bcryptjs";

const verifyUserLoginMW = (req, res, next) => {
  const { email, password } = req.body;

  const user = usersDB.find((user) => user.email === email);

  console.log(user.password);

  if (!user) {
    return res.status(401).json({ error: "Wrong email/password" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Wrong email/password" });
  }

  next();
};

export default verifyUserLoginMW;
