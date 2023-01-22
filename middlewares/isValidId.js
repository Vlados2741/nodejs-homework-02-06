const { isValidObjectId } = require("mongoose");
const HttpError = require("../helpers/index");

const isValidId = (res, req, next) => {
  console.log(req.params);
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(404, "Invalid id"));
  }
  next();
};

module.exports = isValidId;
