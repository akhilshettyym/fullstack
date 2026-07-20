// npm i express nodemon
// npm i multer
// npm i @imagekit/node.js
// npm i cors

const express = require("express");
const multer = require("multer");
const postModal = require("./models/post.model");
const uploadFile = require("./services/storage.service");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer);
    const post = await postModal.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get('/posts', async (req, res) => {
    const posts = await postModal.find();
    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

module.exports = app;