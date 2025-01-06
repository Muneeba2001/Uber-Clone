import jwt from "jsonwebtoken";
import userModel from "../model/user.js"; // Ensure this path is correct

const authMiddleware = {
  authUser: async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded._id);
      if (!req.user) {
        return res.status(401).json({ message: "User not found." });
      }
      next();
    } catch (ex) {
      res.status(400).json({ message: "Invalid token." });
    }
  },
};

export default authMiddleware;