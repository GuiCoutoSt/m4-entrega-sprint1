import usersDB from "../database/users.database";

const deleteUserService = (uuid) => {
  const findedIndex = usersDB.findIndex((user) => user.uuid === uuid);

  usersDB.splice(findedIndex, 1);

  return "User deleted";
};

export default deleteUserService;
