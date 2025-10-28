import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb";
import connectCloudinary from "./config/cloudinary";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productRoute";

// App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares

app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/users", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on port" + port));
