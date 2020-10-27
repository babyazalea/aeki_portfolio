import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { googleLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://whattheorder.herokuapp.com${routes.googleCallback}`
        : `http://localhost:1000${routes.googleCallback}`,
    },
    googleLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
