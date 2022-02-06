import routes from "../routes";
import bcrypt from "bcrypt";
import User from "../models/User";

// Join

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { userId, password, password2 },
  } = req;
  if (password !== password2) {
    req.flash("error", "패스워드가 일치하지 않습니다");
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      console.log("pre create user");
      await User.create({ userId, password });
      res.redirect(routes.login);
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

// Login

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log in" });

export const postLogin = async (req, res) => {
  const { userId, password } = req.body;
  const user = await User.findOne({ userId: userId });
  if (!user) {
    return res.status(400).render("login", {
      errorMessage: "유저가 존재하지 않습니다.",
      pageTitle: "Log in",
    });
  }

  const identified = await bcrypt.compare(password, user.password);

  if (!identified) {
    return res.status(400).render("login", {
      errorMessage: "아이디와 비밀번호를 확인해주세요.",
      pageTitle: "Log in",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("installations")
      .populate("mnps");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
