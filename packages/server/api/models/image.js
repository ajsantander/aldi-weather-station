const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        imgPath: String
    });

module.exports = mongoose.model('image', imageSchema);