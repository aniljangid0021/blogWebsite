import express from "express";
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors"

const app=express();
app.use(cors())

app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter)


mongoose.connect("mongodb://blog:blog@blog-shard-00-00.pxtmm.mongodb.net:27017,blog-shard-00-01.pxtmm.mongodb.net:27017,blog-shard-00-02.pxtmm.mongodb.net:27017/test?ssl=true&replicaSet=atlas-34a222-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>console.log("connected to mongodb and listen to port 5000"))
.catch((err)=>console.log(err));

