const express = require("express");
const ctrl = require("../../controllers/index");
const { validateBody } = require("../../middlewares/index");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.contactSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validateBody(schemas.contactSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.updateFavoriteContact),
  ctrl.updateStatusContact
);

module.exports = router;
