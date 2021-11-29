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

function add(image, callback) {
    const newImage = new ImageModel({
        pose: image.pose,
        date: image.date
    });

    newImage.save((error, result) => {
        callback(result);
    })
}

module.exports = {
    getAll,
    add
};