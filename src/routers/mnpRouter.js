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
const mnpRouter = express.Router();

mnpRouter.get(routes.searchMnp, searchMnp);

mnpRouter.get(routes.createMnp, getCreateMnp);
mnpRouter.post(routes.createMnp, postCreateMnp);

mnpRouter.get(routes.mnpDetail(), mnpDetail);

mnpRouter.get(routes.editMnp(), getEditMnp);
mnpRouter.post(routes.editMnp(), postEditMnp);

mnpRouter.get(routes.deleteMnp(), deleteMnp);

export default mnpRouter;
