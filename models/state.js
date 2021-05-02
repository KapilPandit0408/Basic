const mongoose = require('mongoose');


var stateSchema = new mongoose.Schema({
    name:String,
    image: String,
    history:String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});


module.exports = mongoose.model("State", stateSchema);