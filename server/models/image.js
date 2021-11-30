var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    pose: Number,
    date: Date,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
const ImageModel = mongoose.model('Image', imageSchema);
  
module.exports = ImageModel;