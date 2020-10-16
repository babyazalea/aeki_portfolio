import "@babel/polyfill";
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Installation";
import "./models/Mnp";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 1000;

const handleListening = () =>
  console.log(`Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
