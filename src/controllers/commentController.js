import routes from "../routes";
import Installation from "../models/Installation";
import Mnp from "../models/Mnp";
import Comment from "../models/Comment";

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;
  try {
    const installation = await Installation.findById(id);
    const mnp = await Mnp.findById(id);
    if (installation) {
      const installationComment = await Comment.create({
        text: comment,
        creator: user.id,
      });
      installation.comments.push(installationComment.id);
      installation.save();
    } else if (mnp) {
      const mnpComment = await Comment.create({
        text: comment,
        creator: user.id,
      });
      mnp.comments.push(mnpComment.id);
      mnp.save();
    }
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postDeleteComment = async (req, res) => {
  const {
    params: { commentId },
  } = req;
  try {
    await Comment.findByIdAndRemove({
      _id: commentId,
    });
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
