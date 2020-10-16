import express from "express";
import routes from "../routes";
import {
  searchMnp,
  getCreateMnp,
  postCreateMnp,
  mnpDetail,
  getEditMnp,
  postEditMnp,
  deleteMnp,
} from "../controllers/mnpController";
import { onlyPrivate } from "../middlewares";
const mnpRouter = express.Router();

mnpRouter.get(routes.searchMnp, searchMnp);

mnpRouter.get(routes.createMnp, onlyPrivate, getCreateMnp);
mnpRouter.post(routes.createMnp, onlyPrivate, postCreateMnp);

mnpRouter.get(routes.mnpDetail(), mnpDetail);

mnpRouter.get(routes.editMnp(), onlyPrivate, getEditMnp);
mnpRouter.post(routes.editMnp(), onlyPrivate, postEditMnp);

mnpRouter.get(routes.deleteMnp(), onlyPrivate, deleteMnp);

export default mnpRouter;
