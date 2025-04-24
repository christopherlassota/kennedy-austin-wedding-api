import express from "express";
import cors from "cors";
import "dotenv/config";
import guestlistRouter from "./routes/guestlist.js";

const app =express();
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use("/", guestlistRouter)

app.listen(process.env.PORT, () => {
    console.log(`The server is running on ${process.env.PORT}`);
  });
