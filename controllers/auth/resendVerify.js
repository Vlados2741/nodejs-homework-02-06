const { User } = require("../../models/user");
const { HttpError, sendMail } = require("../../helpers/index");

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw HttpError(400, {
      message: "User doesn`t exist or email is verified ",
    });
  }

  const verifyMessage = {
    to: email,
    subject: "Verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click here to verify your email</a>`,
  };

  await sendMail(verifyMessage);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerify;
