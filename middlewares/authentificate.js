const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const HttpError = require("../helpers/index");
const { User } = require("../models/user");

const authentificate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      next(HttpError(401, { message: "Not authorized" }));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError);
  }
};

module.exports = authentificate;
