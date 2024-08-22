import express from "express";
import { configDotenv } from "dotenv";
import { dbConnect } from "./database/dbConnect.js";
import { appRouter } from "./routers/appRouters.js";

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("./public"))
configDotenv();

app.use(appRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is up with port ${process.env.PORT}`);
    dbConnect();
});
