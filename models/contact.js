const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = model("contact", contactsSchema);

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteContact = Joi.object({
  favorite: Joi.boolean().required,
});

const schemas = {
  contactSchema,
  updateFavoriteContact,
};

module.exports = {
  Contact,
  schemas,
};
