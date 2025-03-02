import jwt from 'jsonwebtoken';
import userModel from '../model/user.js';
import BlackListToken from '../model/blackListToken.js';
import captainModel from '../model/captain.js';
const authMiddleware = {
  authUser: async (req, res, next) => {
    let token =
      req.cookies.token || req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Access denied. No token provided.' });
    }
    const isBlackListed = await BlackListToken.findOne({ token: token });
    if (isBlackListed) {
      return res
        .status(401)
        .json({ message: 'Access denied. Token blacklisted.' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded._id);
      if (!req.user) {
        return res.status(401).json({ message: 'User not found.' });
      }
      next();
    } catch (ex) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  },
  authCaptain: async (req, res, next) => {
    const token = req.header('Authorization') || req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Access denied. No token provided.' });
    }
    const isBlackListed = await BlackListToken.findOne({ token: token });
    if (isBlackListed) {
      return res
        .status(401)
        .json({ message: 'Access denied. Token blacklisted.' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.captain = await captainModel.findById(decoded._id);
      if (!req.captain) {
        return res.status(401).json({ message: 'Captain not found.' });
      }
      next();
    } catch (ex) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  },
};

export default authMiddleware;
