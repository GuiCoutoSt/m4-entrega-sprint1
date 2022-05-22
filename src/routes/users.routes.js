import { Router } from "express";

import verifyEmailAvailabilityMW from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserLoginMW from "../middlewares/verifyUserLogin.miiddleware";

import createUserController from "../controllers/createUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import readUsersController from "../controllers/readUsers.controller";
import readUserProfileController from "../controllers/readUsersProfile.controller";

const router = Router();

router.post("", verifyEmailAvailabilityMW, createUserController);
router.post("/login", verifyUserLoginMW, userLoginController);
router.get("", readUsersController);
router.get("/profile", readUserProfileController);
export default router;
