import userModel from "../model/user.js";
import bcrypt from "bcrypt"

const userController = {
  register: async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
      if (!fullName || !fullName.firstName || !fullName.lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const user = new userModel({
        fullName: {
          firstName: fullName.firstName,
          lastName: fullName.lastName,
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
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ message: "invalid email and password" });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "invalid email and password" });
      }
      const token = user.generateAuthToken();
      res.status(200).json({ message: "user logged in", user, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error", error });
    }
  }
};
export default userController;