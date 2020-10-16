import routes from "./routes";
import date from "date-format";
import { weekNumber } from "weeknumber";

export const loacalsMiddleware = (req, res, next) => {
  res.locals.siteName = "AEKI";
  res.locals.routes = routes;

  res.locals.weekNumber = weekNumber;
  res.locals.dateFormatter = date;
  res.locals.currentDate = date.asString("yyyy-MM-dd", new Date());

  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
