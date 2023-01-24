const express = require("express");
const ctrl = require("../../controllers/contacts/index");
const { validateBody, authentificate } = require("../../middlewares/index");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authentificate, ctrl.listContacts);

router.get("/:contactId", authentificate, ctrl.getContactById);

router.post(
  "/",
  authentificate,
  validateBody(schemas.contactSchema),
  ctrl.addContact
);

router.delete("/:contactId", authentificate, ctrl.removeContact);

router.put(
  "/:contactId",
  authentificate,
  validateBody(schemas.contactSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authentificate,
  validateBody(schemas.updateFavoriteContact),
  ctrl.updateStatusContact
);

module.exports = router;
