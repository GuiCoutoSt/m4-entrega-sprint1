import usersDB from "../database/users.database";

import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    uuid: uuidv4(),
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  usersDB.push(newUser);

  const target = {};

  const responseUser = Object.assign(target, newUser);

  delete responseUser["password"];

  return responseUser;
};

export default createUserService;
