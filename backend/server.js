import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

const app =express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cookieParser());

app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

app.use("/api/auth",authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res)=>{
//     //root route http://localhost:5000//
//     res.send("Hello Bhuwan!");
// });



app.listen(PORT, () =>{
    connectToMongoDB();

    console.log(`Server Running on port ${PORT}`)
});
