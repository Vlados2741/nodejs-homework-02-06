const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const HttpError = require("../../helpers/index");

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, { message: "Email in use" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = signUp;
