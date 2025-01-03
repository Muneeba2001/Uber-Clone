import userModel from "../model/user.js";
import bcrypt from "bcrypt"

const userController = {
  register: async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const user = new userModel({
        fullName: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10), 
      });
      
      await user.save();
      const token = user.generateAuthToken();
      
        res.status(200).json({message: "user created: ", user, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "internel server error", error})
    }
  },
};
export default userController;