const MessageModel = require('../models/message.model');

class MessageServices {
    static create = async (message) => {
        return await MessageModel.create(message)
    }

    static findAll = async (skip = 0, limit = 100) => {
        return await MessageModel.find().sort({createdAt: 'desc'}).skip(skip).limit(limit).sort({createdAt: 'asc'});
    }

    static findById = async (id) => {
        return await MessageModel.findById(id);        
    }

    static update = async (id, message) => {
        return await MessageModel.findByIdAndUpdate(id, message, {new: true, upsert: true});
    }

    static delete = async (id) => {
        return await MessageModel.findByIdAndDelete(id);
    }

    static deleteAll = async () => {
        await MessageModel.deleteMany(); 
    }
}   

module.exports = {
    MessageServices
}