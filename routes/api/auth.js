const express = require("express");
const ctrl = require("../../controllers/auth/index");
const { validateBody, authentificate } = require("../../middlewares/index");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post("/signup", validateBody(schemas.registerSchema), ctrl.signUp);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authentificate, ctrl.getCurrent);

router.post("/logout", authentificate, ctrl.logout);

module.exports = router;
