const mongoose = require("mongoose");

const chatSchaema = new mongoose.Schema(
    {
        members: Array,
    },
    {
        timestamps: true,
    }

);

const chatModel = mongoose.model("Chat", chatSchaema);

module.exports = chatModel;