const { Contact } = require("../../models/contact");
const HttpError = require("../../helpers/index");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    console.log(req.params);
    const result = await Contact.findByIdAndUpdate(contactId, req.body);
    console.log(result);
    if (!req.body) {
      throw HttpError(400, "message: missing field favorite");
    }
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
