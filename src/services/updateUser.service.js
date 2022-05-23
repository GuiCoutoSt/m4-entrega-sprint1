import usersDB from "../database/users.database";

const updateUserService = (uuid, name, email) => {
  const userIndex = usersDB.findIndex((user) => user.uuid === uuid);

  if (name === undefined) {
    name = usersDB[userIndex].name;
  }

  if (email === undefined) {
    email = usersDB[userIndex].email;
  }

  const updatedUser = {
    uuid,
    name,
    email,
    updatedOn: new Date(),
  };

  usersDB[userIndex] = { ...usersDB[userIndex], ...updatedUser };

  const supportObject = {};

  const responseUser = Object.assign(supportObject, usersDB[userIndex]);

  delete responseUser["password"];

  return responseUser;
};

export default updateUserService;
