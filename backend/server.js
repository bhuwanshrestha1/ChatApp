import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";

import connectToMongoDB from "./db/connectToMongoDB.js";


const PORT = process.env.PORT ;

const __dirname = path.resolve();


dotenv.config();

app.use(cookieParser());

app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

app.use("/api/auth",authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


// app.get("/", (req, res)=>{
//     //root route http://localhost:5000//
//     res.send("Hello Bhuwan!");
// });


server.listen(PORT, () =>{
    connectToMongoDB();

    console.log(`Server Running on port ${PORT}`)
});
