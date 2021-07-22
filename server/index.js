import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";

let app = express();

app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use("/posts", posts);
dotenv.config();
let port = process.env.PORT || 8000;
let URI = 'mongodb://admin:tranchihieu1@mydatabase-shard-00-00.emhnd.mongodb.net:27017,mydatabase-shard-00-01.emhnd.mongodb.net:27017,mydatabase-shard-00-02.emhnd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-plfa0p-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log("sever run on port: ", port)
        });
    })
    .catch(err => console.log(err));