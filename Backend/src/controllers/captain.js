import captainModel from '../model/captain.js';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import BlackListToken from '../model/blackListToken.js';
const captainController = {
  registerCaptain: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      fullName: { firstName, lastName },
      email,
      password,
      vehicle: { color, plate, capacity, vehicleType },
    } = req.body;
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: 'captain already exist' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const captain = await captainModel.create({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password: hashPassword,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });
    await captain.save();
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
  },
  loginCaptain: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if(!captain){
        return res.status(401).json({message: "invalid email and password"});
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message: "invalid email and password"})
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({token, captain})
  },
  getCaptainProfile: async (req, res, next) => {
    res.status(200).json({captain: req.captain})
  },
  logout: async (req, res, next) => {
    const token = req.header("Authorization") || req.cookies.token;
    await BlackListToken.create({token})
    res.clearCookie('token');
    res.status(200).json({message: 'Logout successfully'})
  }
};
export default captainController;
