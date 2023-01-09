const { Contact } = require("../models/contact");

const addContact = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);
    if (!result.favorite) {
      result.favorite = false;
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
