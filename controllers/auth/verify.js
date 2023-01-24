const { User } = require("../../models/user");
const { HttpError } = require("../../helpers/httpError");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, { message: "User not found" });
  }

  res.json({ message: "Verification successful" });
};

module.exports = verify;
