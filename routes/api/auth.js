const express = require("express");
const ctrl = require("../../controllers/auth/index");
const {
  validateBody,
  authentificate,
  upload,
} = require("../../middlewares/index");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post("/signup", validateBody(schemas.registerSchema), ctrl.signUp);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authentificate, ctrl.getCurrent);

router.post("/logout", authentificate, ctrl.logout);

router.patch(
  "/avatars",
  authentificate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
