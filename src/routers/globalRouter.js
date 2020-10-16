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
} from "../controllers/userController";
import { home } from "../controllers/homeController";
import { mnp } from "../controllers/mnpController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.homeLogin, onlyPublic, getLogin);
globalRouter.post(routes.homeLogin, onlyPublic, postLogin);

globalRouter.get(routes.home, onlyPrivate, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// globalRouter.get(routes.login, onlyPublic, getLogin);
// globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.me, getMe);
globalRouter.get(routes.installation, installation);
globalRouter.get(routes.mnp, mnp);

export default globalRouter;
