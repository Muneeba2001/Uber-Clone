import captainModel from '../model/captain.js';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
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
};
export default captainController;
