import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  installations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Installation",
    },
  ],
  mnps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mnp",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
