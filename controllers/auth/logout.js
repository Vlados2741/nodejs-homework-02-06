const { User } = require("../../models/user");

const logout = async (res, req) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204).json({ message: "Logged out" });
};

module.exports = logout;
