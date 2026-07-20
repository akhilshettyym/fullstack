const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: ture,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;