import { validationResult } from "express-validator";
import userModel from "../model/user.js";
import userController from "../controllers/user.js";

module.exports.registerUser = async(req, res, next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
      }
      const {firstName, lastName, email, password} = req.body;
      const hashPassword = await userModel.hashPassword(password);
      const user = await userController.createUser({
        fullName: {
            firstName,
            lastName
        },
        email,
        password: hashPassword
      })
}