const { ImageKit } = require("@imagekit/nodejs/index.js")

const ImageKitClient = new ImageKit({
    password: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file) {
    const result = await ImageKitClient.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "clone/music"
    })
    return result;
}

module.exports = { uploadFile }