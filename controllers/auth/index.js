const signUp = require("./signUp");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./verify");

module.exports = {
  signUp,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verify,
  resendVerify,
};
