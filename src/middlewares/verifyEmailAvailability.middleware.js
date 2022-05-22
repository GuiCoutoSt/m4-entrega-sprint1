import usersDB from "../database/users.database";

const verifyEmailAvailabilityMW = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExists = usersDB.find((user) => user.email === email);

  if (userAlreadyExists) {
    return res.status(401).json({ message: "E-mail already registered" });
  }

  next();
};

export default verifyEmailAvailabilityMW;
