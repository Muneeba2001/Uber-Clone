import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, 'first name at least 3 characters long'],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, 'last name at least 3 characters long'],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, 'last name at least 3 characters long'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enums: ['active', 'inactive'],
    default: active,
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, 'color at least 3 characters long'],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, 'plate at least 3 characters long'],
    },
    capacity: {
      type: Number,
      required: true,
      minLength: [3, 'capacity must be at least 1'],
    },
    vehicleType: {
      type: String,
      required: true,
      enums: ['car', 'auto', 'motorcycle'],
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.methods.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('user', captainSchema);
export default captainModel;
