import { Router } from "express";
import { body } from "express-validator";
import captainController from "../../controllers/captain.js";

const captainRouter = Router();

captainRouter.post('/captain/register', [
    body('fullName.firstName').isString().withMessage('name must be a string'),
    body('fullName.lastName').isString().withMessage('name must be a string'),
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long'),
    body('vehicle.color').isLength().withMessage('color must be atleast 3 characters'),
    body('vehicle.plate').isLength().withMessage('plate must be atleast 3 characters'),
    body('vehicle.capacity').isNumeric().withMessage('capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn('car', 'motorcycle', 'auto').withMessage('invalid'),
], captainController.registerCaptain);
export default captainRouter;