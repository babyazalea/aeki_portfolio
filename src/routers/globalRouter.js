import express from "express";
import routes from "../routes";
import { installation } from "../controllers/installationController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getMe,
  googleLogin,
  postGoogleLogin,
} from "../controllers/userController";
import { home } from "../controllers/homeController";
import { mnp } from "../controllers/mnpController";
import { onlyPublic, onlyPrivate } from "../middlewares";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.me, getMe);
globalRouter.get(routes.installation, installation);
globalRouter.get(routes.mnp, mnp);

globalRouter.get(routes.google, googleLogin);
globalRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: "/login" }),
  postGoogleLogin
);

export default globalRouter;
