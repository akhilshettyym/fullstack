const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})

const postModal = mongoose.model("post", postSchema);