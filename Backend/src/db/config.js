import mongoose from 'mongoose';

function connectDb() { 
     mongoose.connect(process.env.DB_CONNECT, { })
.then(() => console.log("DB connected"))
.catch((err) => console.error("DB connection error: ", err));
}

export {connectDb};