const { Schema, model } = require("mongoose");
const configValues = require("../utils/config");

const messageSchema = new Schema({
    description: {
        type: String,
        required: true
    },
}, 
{
    collection: configValues.messageModel,
    timestamps: true
});

const MessageModel = model(configValues.messageModel, messageSchema); // Use `model` instead of `mongoose.model`

module.exports = MessageModel;