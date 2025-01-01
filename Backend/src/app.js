import 'dotenv/config'
import express from "express";
import cors from "cors"

const port = process.env.PORT;
const appData = express();
appData.use(cors());

appData.listen(port, ()=>{
    console.log("Server Stated!")
})
