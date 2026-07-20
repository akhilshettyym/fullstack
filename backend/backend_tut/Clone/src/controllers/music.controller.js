const musicModel = require("../models/music.model");
const jwt = require('jsonwebtokens');
const { uploadFile } = require("../services/storage.service");
const albumModel = require("../models/album.model");


async function createMusic(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "Forbidden, You don't have the acess to create a music" })
        }

        const { title } = req.body;
        const file = req.file;

        const result = await uploadFile(file.buffer.toString('base64'));

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id,
        })

        res.status(201).json({
            message: "Music created successfully",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            }
        })
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized" })
    }

}

async function createAlbum(req, res) {
    const token = req.cookies.token;

    if (token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "You don't have access to create an album" })
        }

        const { title, musics } = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics,
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            }
        })

    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized" })
    }
}

async function getAllMusics(req, res) {

    const musics = await musicModel
    .find()
    .skip(2)  // Skips the first two songs and starts with the third
    .limit(2) // No matter how many musics we have, we can limit it to reduce the load
    .populate("artist", "username email")

    res.status(200).json({
        message: "Musics fetched successfully",
        musics: musics
    })
}

async function getAllAlbums(req, res) {

    const albums = await albumModel.find().select("title artist").populate("artist", "username");

    res.status(200).json({
        message: "Albums fetched successfully",
        albums: albums
    })
}

async function getAlbumById(req, res) {
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics");

    return res.status(200).json({
        message: "Album fetched successfully",
        album: album,
    })
}

module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById }