import 'dotenv/config'
import express from "express";
import cors from "cors"
import { connectDb } from './db/config.js';
import appRouter from './routes/routes.js';

const port = process.env.PORT;
const appData = express();
appData.use(express.json())
appData.use(cors());
connectDb();
appData.use(appRouter)

appData.listen(port, ()=>{
    console.log("Server Stated!")
})
