import express from "express";
import cors from "cors";
import "dotenv/config";
import guestlistRouter from "./routes/guestlist.js";

const app =express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use("/guestlist", guestlistRouter)

app.listen(process.env.PORT, () => {
    console.log(`The server is running at ${process.env.BACKEND_URL}${PORT}`);
  });
  