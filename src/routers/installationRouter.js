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
import { onlyPrivate } from "../middlewares";

const installationRouter = express.Router();

installationRouter.get(routes.searchInstallation, searchInstallation);

installationRouter.get(
  routes.createInstallation,
  onlyPrivate,
  getCreateInstallation
);
installationRouter.post(
  routes.createInstallation,
  onlyPrivate,
  postCreateInstallation
);

installationRouter.get(routes.installationDetail(), installationDetail);

installationRouter.get(
  routes.editInstallation(),
  onlyPrivate,
  getEditInstallation
);
installationRouter.post(
  routes.editInstallation(),
  onlyPrivate,
  postEditInstallation
);
installationRouter.get(
  routes.deleteInstallation(),
  onlyPrivate,
  deleteInstallation
);

export default installationRouter;
