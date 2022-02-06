import express from "express";
import routes from "../routes";

import {
  installationDetail,
  deleteInstallation,
  searchInstallation,
  getCreateInstallation,
  postCreateInstallation,
  getEditInstallation,
  postEditInstallation,
} from "../controllers/installationController";

// import { onlyPrivate } from "../middlewares";

const installationRouter = express.Router();

installationRouter.get(routes.searchInstallation, searchInstallation);

installationRouter.get(routes.createInstallation, getCreateInstallation);

installationRouter.post(routes.createInstallation, postCreateInstallation);

installationRouter.get(routes.installationDetail(), installationDetail);

installationRouter.get(routes.editInstallation(), getEditInstallation);
installationRouter.post(routes.editInstallation(), postEditInstallation);
installationRouter.get(routes.deleteInstallation(), deleteInstallation);

export default installationRouter;
