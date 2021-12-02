const ImageModel = require("./models/image");

function getAll(callback) {
    ImageModel.find({}, (error, result) => {
        if (error) {
            console.log(error);
            callback([]);
        } else {
            callback(result);
        }
    })
}

function add(newImage, callback) {
    newImage.save((error, result) => {
        callback(result);
    })
}

module.exports = {
    getAll,
    add
};