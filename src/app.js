import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { loacalsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import installationRouter from "./routers/installationRouter";
import mnpRouter from "./routers/mnpRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: "testing",
    resave: true,
    saveUninitialized: true,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash());

app.use(loacalsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.installation, installationRouter);
app.use(routes.mnp, mnpRouter);
app.use(routes.api, apiRouter);

export default app;
