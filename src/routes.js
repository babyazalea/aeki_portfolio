// Global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANEGE_PASSWORD = "/change-password";
const ME = "/me";

// Installation

const INSTALLATION = "/installation";
const SEARCH_INSTALLATION = "/search";
const CREATE_INSTALLATION = "/create";
const INSTALLATION_DETAIL = "/:id";
const EDIT_INSTALLATION = "/:id/edit";
const DELETE_INSTALLATION = "/:id/delete";

// measurement and plannig

const MNP = "/mnp";
const SEARCH_MNP = "/search";
const CREATE_MNP = "/create";
const MNP_DETAIL = "/:id";
const EDIT_MNP = "/:id/edit";
const DELETE_MNP = "/:id/delete";

// API

const API = "/api";
const ADD__COMMENT = "/:id/comment";
const DELETE__COMMENT = "/:id/comment/:commentId/delete";

// routes

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANEGE_PASSWORD,
  me: ME,
  installation: INSTALLATION,
  searchInstallation: SEARCH_INSTALLATION,
  createInstallation: CREATE_INSTALLATION,
  installationDetail: (id) => {
    if (id) {
      return `/installation/${id}`;
    } else {
      return INSTALLATION_DETAIL;
    }
  },
  editInstallation: (id) => {
    if (id) {
      return `/installation/${id}/edit`;
    } else {
      return EDIT_INSTALLATION;
    }
  },
  deleteInstallation: (id) => {
    if (id) {
      return `/installation/${id}/delete`;
    } else {
      return DELETE_INSTALLATION;
    }
  },
  mnp: MNP,
  searchMnp: SEARCH_MNP,
  createMnp: CREATE_MNP,
  mnpDetail: (id) => {
    if (id) {
      return `/mnp/${id}`;
    } else {
      return MNP_DETAIL;
    }
  },
  editMnp: (id) => {
    if (id) {
      return `/mnp/${id}/edit`;
    } else {
      return EDIT_MNP;
    }
  },
  deleteMnp: (id) => {
    if (id) {
      return `/mnp/${id}/delete`;
    } else {
      return DELETE_MNP;
    }
  },
  api: API,
  addComment: ADD__COMMENT,
  deleteComment: DELETE__COMMENT,
};

export default routes;
