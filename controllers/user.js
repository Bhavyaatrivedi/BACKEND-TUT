const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type:String,
        default: false
    },
    createdAt:{
        type: data,
        default: Date.now,
    }
});

export const User = mongoose.model("User", schema);