import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.PRODUCTION === "true"
    ? process.env.MONGO_URL_PROD
    : process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

console.log(process.env.PRODUCTION);

const handleOpen = () =>
  console.log(
    `Connected to DB ${
      process.env.PRODUCTION === "true"
        ? "with MongoDB Atlas"
        : "with Local MongoDB"
    }`
  );
const handleError = (error) => console.log(`Error On DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
