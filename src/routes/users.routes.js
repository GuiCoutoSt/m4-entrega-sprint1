import { Router } from "express";

import verifyEmailAvailabilityMW from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserLoginMW from "../middlewares/verifyUserLogin.miiddleware";
import verifyAuthTokenMW from "../middlewares/verifyAuthToken.middleware";
import verifyAdminUserMW from "../middlewares/verifyAdminUser.middleware";
import verifyUpdateRequest from "../middlewares/verifyUpdateRequest.middleware";
import verifyDeleteRequestMW from "../middlewares/verifyDeleRequest.middleware";

import createUserController from "../controllers/createUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import readUsersController from "../controllers/readUsers.controller";
import readUserProfileController from "../controllers/readUsersProfile.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";

const router = Router();

router.post("", verifyEmailAvailabilityMW, createUserController);

router.post("/login", verifyUserLoginMW, userLoginController);

router.get("", verifyAuthTokenMW, verifyAdminUserMW, readUsersController);

router.get("/profile", verifyAuthTokenMW, readUserProfileController);

router.patch(
  "/:uuid",
  verifyAuthTokenMW,
  verifyUpdateRequest,
  updateUserController
);

router.delete(
  "/:uuid",
  verifyAuthTokenMW,
  verifyDeleteRequestMW,
  deleteUserController
);

export default router;
