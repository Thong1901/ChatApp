const messageModel = require("../Models/messageModel");

//createMessage

const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;

    const message = new messageModel({
        chatId, senderId, text
    })

    try {
        const response = await message.save();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//getMessages

const getMessages = async (req, res) => {
    const { chatId } = req.params;

    try {
        const messages = await messageModel.find({ chatId });
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

};
const deleteMessages = async (req, res) => {
    try {
        const result = await messageModel.deleteMany({}); // Xóa toàn bộ tin nhắn
        res.status(200).send({ success: true, message: "All messages deleted successfully", count: result.deletedCount });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error deleting messages", error: error.message });
    }
};

module.exports = {
    createMessage, getMessages, deleteMessages
}