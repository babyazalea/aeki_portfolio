import express from "express";
import routes from "../routes";
import {
  postAddComment,
  postDeleteComment,
} from "../controllers/commentController";

const apiRotuer = express.Router();

apiRotuer.post(routes.addComment, postAddComment);
apiRotuer.delete(routes.deleteComment, postDeleteComment);

export default apiRotuer;
