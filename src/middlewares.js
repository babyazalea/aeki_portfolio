import routes from "./routes";
import date from "date-format";
import { weekNumber } from "weeknumber";

export const loacalsMiddleware = (req, res, next) => {
  res.locals.siteName = "wto";
  res.locals.routes = routes;

  res.locals.weekNumber = weekNumber;
  res.locals.dateFormatter = date;
  res.locals.currentDate = date.asString("yyyy-MM-dd", new Date());

  res.locals.loggedIn = Boolean(req.session.loggedIn);
  console.log(req.session);
  res.locals.loggedUser = req.session.user;
  next();
};

export const onlyPrivate = (req, res, next) => {
  if (req.locals.loggdIn) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
