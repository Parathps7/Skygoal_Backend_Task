const mongoose = require('mongoose')

const imgSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Image',imgSchema)