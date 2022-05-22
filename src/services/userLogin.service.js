import jwt from "jsonwebtoken";

const userLoginService = (email) => {
  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default userLoginService;
