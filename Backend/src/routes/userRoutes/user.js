import { Router } from "express";
import { body } from "express-validator";
import userController from "../../controllers/user.js";
import authMiddleware from "../../middleware/authMiddleware.js"; 

const userRouter = Router();
userRouter.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("name must have three characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must have 6 characters long"),
  ],
  userController.register
);
userRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must have 6 characters long"),
  ],
  userController.login
);
userRouter.get("/profile", authMiddleware.authUser, userController.getUserProfile);
export default userRouter;